"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AiExplanationScalarFieldEnum = exports.TechnologyDetectionScalarFieldEnum = exports.LanguageStatisticScalarFieldEnum = exports.RepositorySnapshotScalarFieldEnum = exports.RepositoryScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Repository: 'Repository',
    RepositorySnapshot: 'RepositorySnapshot',
    LanguageStatistic: 'LanguageStatistic',
    TechnologyDetection: 'TechnologyDetection',
    AiExplanation: 'AiExplanation'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.RepositoryScalarFieldEnum = {
    id: 'id',
    githubId: 'githubId',
    owner: 'owner',
    name: 'name',
    fullName: 'fullName',
    githubUrl: 'githubUrl',
    description: 'description',
    defaultBranch: 'defaultBranch',
    visibility: 'visibility',
    archived: 'archived',
    primaryLanguage: 'primaryLanguage',
    topics: 'topics',
    stars: 'stars',
    forks: 'forks',
    openIssues: 'openIssues',
    licenseName: 'licenseName',
    licenseIdentifier: 'licenseIdentifier',
    ownerAvatarUrl: 'ownerAvatarUrl',
    githubUpdatedAt: 'githubUpdatedAt',
    githubPushedAt: 'githubPushedAt',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RepositorySnapshotScalarFieldEnum = {
    id: 'id',
    repositoryId: 'repositoryId',
    commitSha: 'commitSha',
    branch: 'branch',
    status: 'status',
    treeData: 'treeData',
    treeTruncated: 'treeTruncated',
    itemsAnalyzed: 'itemsAnalyzed',
    analysisStartedAt: 'analysisStartedAt',
    analysisCompletedAt: 'analysisCompletedAt',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LanguageStatisticScalarFieldEnum = {
    id: 'id',
    snapshotId: 'snapshotId',
    name: 'name',
    fileCount: 'fileCount',
    percentage: 'percentage',
    extensions: 'extensions',
    createdAt: 'createdAt'
};
exports.TechnologyDetectionScalarFieldEnum = {
    id: 'id',
    snapshotId: 'snapshotId',
    name: 'name',
    category: 'category',
    confidence: 'confidence',
    evidence: 'evidence',
    createdAt: 'createdAt'
};
exports.AiExplanationScalarFieldEnum = {
    id: 'id',
    snapshotId: 'snapshotId',
    model: 'model',
    purpose: 'purpose',
    howItWorks: 'howItWorks',
    architecture: 'architecture',
    gettingStarted: 'gettingStarted',
    skills: 'skills',
    difficultyLevel: 'difficultyLevel',
    difficultyReason: 'difficultyReason',
    keyTakeaways: 'keyTakeaways',
    generatedAt: 'generatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map