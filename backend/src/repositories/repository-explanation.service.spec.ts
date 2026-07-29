import {
  HttpException,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

import { RepositoriesService } from './repositories.service';
import { RepositoryExplanationService } from './repository-explanation.service';
import { TechnologyDetectorService } from './technology-detector.service';

jest.mock('@google/genai');

type InteractionRequest = {
  model: string;
  input: string;
  generation_config?: {
    thinking_level?: string;
  };
  response_format?: {
    type?: string;
    mime_type?: string;
    schema?: unknown;
  };
};

type InteractionOptions = {
  timeout?: number;
  maxRetries?: number;
};

type InteractionResult = {
  output_text?: string;
};

const repository = {
  fullName: 'example/project',
  description: 'An example project',
  defaultBranch: 'main',
  language: 'TypeScript',
  githubUrl: 'https://github.com/example/project',
};

const analysis = {
  languages: [{ name: 'TypeScript', percentage: 100 }],
  technologies: [
    {
      name: 'NestJS',
      category: 'Framework',
      evidence: ['package.json', 'src/main.ts'],
    },
  ],
};

const generatedExplanation = {
  purpose: 'Explains an example project.',
  howItWorks: 'Uses a small TypeScript service.',
  architecture: [
    {
      name: 'API',
      description: 'Provides the API.',
      evidencePaths: ['package.json', 'invented-file.ts'],
    },
  ],
  gettingStarted: [
    {
      step: 2,
      title: 'Read the entry point',
      description: 'Review the application bootstrap.',
      paths: ['src/main.ts', 'invented-file.ts'],
    },
    {
      step: 1,
      title: 'Review dependencies',
      description: 'Start with the package manifest.',
      paths: ['package.json'],
    },
  ],
  skills: ['TypeScript'],
  difficulty: {
    level: 'beginner',
    reason: 'The project is small.',
  },
  keyTakeaways: ['The API is written in TypeScript.'],
};

describe('RepositoryExplanationService', () => {
  const mockCreateInteraction =
    jest.fn<
      (
        request: InteractionRequest,
        options?: InteractionOptions,
      ) => Promise<InteractionResult>
    >();
  const mockGoogleGenAI = jest.mocked(GoogleGenAI);
  const environment: Record<string, string | undefined> = {};

  let service: RepositoryExplanationService;
  let loggerErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    environment.GEMINI_API_KEY = 'test-api-key';
    environment.GEMINI_MODEL = 'gemini-3.5-flash';
    loggerErrorSpy = jest
      .spyOn(Logger.prototype, 'error')
      .mockImplementation(() => undefined);

    mockGoogleGenAI.mockImplementation(
      () =>
        ({
          interactions: {
            create: mockCreateInteraction,
          },
        }) as unknown as GoogleGenAI,
    );

    const configService = {
      get: jest.fn((key: string) => environment[key]),
    } as unknown as ConfigService;
    const repositoriesService = {
      inspectRepository: jest.fn().mockResolvedValue(repository),
    } as unknown as RepositoriesService;
    const technologyDetectorService = {
      detectTechnologies: jest.fn().mockResolvedValue(analysis),
    } as unknown as TechnologyDetectorService;

    service = new RepositoryExplanationService(
      configService,
      repositoriesService,
      technologyDetectorService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('returns a configuration 503 when the API key is blank', async () => {
    environment.GEMINI_API_KEY = '   ';

    await expect(
      service.explainRepository(repository.githubUrl),
    ).rejects.toThrow(
      new ServiceUnavailableException(
        'Gemini is not configured. Add GEMINI_API_KEY to the backend environment.',
      ),
    );
    expect(mockCreateInteraction).not.toHaveBeenCalled();
  });

  it('normalizes configuration and preserves verified evidence paths', async () => {
    environment.GEMINI_API_KEY = ' GEMINI_API_KEY="test-api-key" ';
    environment.GEMINI_MODEL = "GEMINI_MODEL='gemini-3.5-flash'";
    mockCreateInteraction.mockResolvedValue({
      output_text: JSON.stringify(generatedExplanation),
    });

    const result = await service.explainRepository(repository.githubUrl);

    expect(mockGoogleGenAI).toHaveBeenCalledWith({
      apiKey: 'test-api-key',
    });
    const [providerRequest, requestOptions] = mockCreateInteraction.mock
      .calls[0] as unknown as [
      InteractionRequest,
      InteractionOptions | undefined,
    ];

    expect(providerRequest).toMatchObject({
      model: 'gemini-3.5-flash',
      generation_config: {
        thinking_level: 'low',
      },
      response_format: {
        type: 'text',
        mime_type: 'application/json',
      },
    });
    expect(requestOptions).toEqual({
      timeout: 45_000,
      maxRetries: 1,
    });
    expect(result.repository).toBe(repository);
    expect(result.model).toBe('gemini-3.5-flash');
    expect(result.explanation.architecture[0].evidencePaths).toEqual([
      'package.json',
    ]);
    expect(result.explanation.gettingStarted).toEqual([
      expect.objectContaining({
        step: 1,
        paths: ['package.json'],
      }),
      expect.objectContaining({
        step: 2,
        paths: ['src/main.ts'],
      }),
    ]);
    expect(result.generatedAt).toEqual(expect.any(String));
  });

  it('maps provider quota errors to HTTP 429', async () => {
    const quotaError = Object.assign(new Error('429 Quota exhausted'), {
      name: 'RateLimitError',
      status: 429,
      statusCode: 429,
      error: {
        httpMeta: {
          request: {},
          response: {},
        },
        error: {
          code: 429,
          status: 'RESOURCE_EXHAUSTED',
          message: 'Quota exhausted',
        },
      },
    });
    mockCreateInteraction.mockRejectedValue(quotaError);

    const request = service.explainRepository(repository.githubUrl);

    await expect(request).rejects.toBeInstanceOf(HttpException);
    await expect(request).rejects.toMatchObject({
      status: 429,
      response:
        'The AI explanation service has reached its rate limit. Please retry shortly.',
    });
  });

  it('maps authentication errors to a safe 503 and redacts secrets', async () => {
    const apiKey = 'test-provider-secret-value';
    const authorizationSecret = 'different-basic-secret';
    environment.GEMINI_API_KEY = apiKey;
    const authenticationError = Object.assign(
      new Error(
        `403 Request failed: https://provider.test?key=${apiKey} Authorization: Basic ${authorizationSecret}`,
      ),
      {
        name: 'PermissionDeniedError',
        status: 403,
        error: {
          error: {
            code: 403,
            status: 'PERMISSION_DENIED',
            message: 'Permission denied',
          },
        },
      },
    );
    mockCreateInteraction.mockRejectedValue(authenticationError);

    await expect(
      service.explainRepository(repository.githubUrl),
    ).rejects.toThrow(
      'The AI explanation service could not authenticate with its provider. Please try again later.',
    );

    const loggerCalls = loggerErrorSpy.mock.calls as unknown[][];
    const logMessage = String(loggerCalls[0]?.[0]);

    expect(logMessage).toContain(
      'Gemini provider request failed model=gemini-3.5-flash status=403',
    );
    expect(logMessage).toContain('code=PERMISSION_DENIED');
    expect(logMessage).toContain('[REDACTED]');
    expect(logMessage).not.toContain(apiKey);
    expect(logMessage).not.toContain('Authorization');
    expect(logMessage).not.toContain(authorizationSecret);
  });

  it('maps provider timeouts to HTTP 503', async () => {
    const timeoutError = Object.assign(new Error('Request timed out'), {
      name: 'APIConnectionTimeoutError',
    });
    mockCreateInteraction.mockRejectedValue(timeoutError);

    await expect(
      service.explainRepository(repository.githubUrl),
    ).rejects.toThrow(
      'The AI explanation provider is temporarily unavailable. Please try again.',
    );
  });

  it('logs only configuration state and the selected model', () => {
    const logSpy = jest
      .spyOn(Logger.prototype, 'log')
      .mockImplementation(() => undefined);

    service.onModuleInit();

    expect(logSpy).toHaveBeenCalledWith(
      'Gemini configuration: configured=true model=gemini-3.5-flash',
    );
    expect(String(logSpy.mock.calls[0]?.[0])).not.toContain(
      environment.GEMINI_API_KEY,
    );
  });
});
