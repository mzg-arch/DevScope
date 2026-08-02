import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Repository: "Repository";
    readonly RepositorySnapshot: "RepositorySnapshot";
    readonly LanguageStatistic: "LanguageStatistic";
    readonly TechnologyDetection: "TechnologyDetection";
    readonly AiExplanation: "AiExplanation";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const RepositoryScalarFieldEnum: {
    readonly id: "id";
    readonly githubId: "githubId";
    readonly owner: "owner";
    readonly name: "name";
    readonly fullName: "fullName";
    readonly githubUrl: "githubUrl";
    readonly description: "description";
    readonly defaultBranch: "defaultBranch";
    readonly visibility: "visibility";
    readonly archived: "archived";
    readonly primaryLanguage: "primaryLanguage";
    readonly topics: "topics";
    readonly stars: "stars";
    readonly forks: "forks";
    readonly openIssues: "openIssues";
    readonly licenseName: "licenseName";
    readonly licenseIdentifier: "licenseIdentifier";
    readonly ownerAvatarUrl: "ownerAvatarUrl";
    readonly githubUpdatedAt: "githubUpdatedAt";
    readonly githubPushedAt: "githubPushedAt";
    readonly lastSyncedAt: "lastSyncedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum];
export declare const RepositorySnapshotScalarFieldEnum: {
    readonly id: "id";
    readonly repositoryId: "repositoryId";
    readonly commitSha: "commitSha";
    readonly branch: "branch";
    readonly status: "status";
    readonly treeData: "treeData";
    readonly truncatedByGitHub: "truncatedByGitHub";
    readonly limitedByDevScope: "limitedByDevScope";
    readonly maximumReturnedItems: "maximumReturnedItems";
    readonly itemsAnalyzed: "itemsAnalyzed";
    readonly analysisStartedAt: "analysisStartedAt";
    readonly analysisCompletedAt: "analysisCompletedAt";
    readonly failureReason: "failureReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RepositorySnapshotScalarFieldEnum = (typeof RepositorySnapshotScalarFieldEnum)[keyof typeof RepositorySnapshotScalarFieldEnum];
export declare const LanguageStatisticScalarFieldEnum: {
    readonly id: "id";
    readonly snapshotId: "snapshotId";
    readonly name: "name";
    readonly fileCount: "fileCount";
    readonly percentage: "percentage";
    readonly extensions: "extensions";
    readonly createdAt: "createdAt";
};
export type LanguageStatisticScalarFieldEnum = (typeof LanguageStatisticScalarFieldEnum)[keyof typeof LanguageStatisticScalarFieldEnum];
export declare const TechnologyDetectionScalarFieldEnum: {
    readonly id: "id";
    readonly snapshotId: "snapshotId";
    readonly name: "name";
    readonly category: "category";
    readonly confidence: "confidence";
    readonly evidence: "evidence";
    readonly createdAt: "createdAt";
};
export type TechnologyDetectionScalarFieldEnum = (typeof TechnologyDetectionScalarFieldEnum)[keyof typeof TechnologyDetectionScalarFieldEnum];
export declare const AiExplanationScalarFieldEnum: {
    readonly id: "id";
    readonly snapshotId: "snapshotId";
    readonly model: "model";
    readonly purpose: "purpose";
    readonly howItWorks: "howItWorks";
    readonly architecture: "architecture";
    readonly gettingStarted: "gettingStarted";
    readonly skills: "skills";
    readonly difficultyLevel: "difficultyLevel";
    readonly difficultyReason: "difficultyReason";
    readonly keyTakeaways: "keyTakeaways";
    readonly generatedAt: "generatedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AiExplanationScalarFieldEnum = (typeof AiExplanationScalarFieldEnum)[keyof typeof AiExplanationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
