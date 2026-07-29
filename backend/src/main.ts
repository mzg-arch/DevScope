import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  const allowedOrigins = [
    "http://localhost:3000",
    process.env.FRONTEND_URL?.replace(/\/$/, ""),
  ].filter((origin): origin is string => Boolean(origin));

  app.enableCors({
    origin(
  origin: string | undefined,
  callback: (error: Error | null, allow?: boolean) => void,
)  {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin is not allowed by CORS"), false);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = Number(process.env.PORT ?? 4000);

  await app.listen(port, "0.0.0.0");

  console.log(`DevScope API running on port ${port}`);
}

bootstrap();