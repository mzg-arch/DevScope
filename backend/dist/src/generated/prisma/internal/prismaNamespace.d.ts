import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Repository: "Repository";
    readonly RepositorySnapshot: "RepositorySnapshot";
    readonly LanguageStatistic: "LanguageStatistic";
    readonly TechnologyDetection: "TechnologyDetection";
    readonly AiExplanation: "AiExplanation";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "repository" | "repositorySnapshot" | "languageStatistic" | "technologyDetection" | "aiExplanation";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Repository: {
            payload: Prisma.$RepositoryPayload<ExtArgs>;
            fields: Prisma.RepositoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RepositoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                findFirst: {
                    args: Prisma.RepositoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                findMany: {
                    args: Prisma.RepositoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>[];
                };
                create: {
                    args: Prisma.RepositoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                createMany: {
                    args: Prisma.RepositoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>[];
                };
                delete: {
                    args: Prisma.RepositoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                update: {
                    args: Prisma.RepositoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                deleteMany: {
                    args: Prisma.RepositoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RepositoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>[];
                };
                upsert: {
                    args: Prisma.RepositoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositoryPayload>;
                };
                aggregate: {
                    args: Prisma.RepositoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRepository>;
                };
                groupBy: {
                    args: Prisma.RepositoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepositoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RepositoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepositoryCountAggregateOutputType> | number;
                };
            };
        };
        RepositorySnapshot: {
            payload: Prisma.$RepositorySnapshotPayload<ExtArgs>;
            fields: Prisma.RepositorySnapshotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RepositorySnapshotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RepositorySnapshotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                findFirst: {
                    args: Prisma.RepositorySnapshotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RepositorySnapshotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                findMany: {
                    args: Prisma.RepositorySnapshotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>[];
                };
                create: {
                    args: Prisma.RepositorySnapshotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                createMany: {
                    args: Prisma.RepositorySnapshotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RepositorySnapshotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>[];
                };
                delete: {
                    args: Prisma.RepositorySnapshotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                update: {
                    args: Prisma.RepositorySnapshotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                deleteMany: {
                    args: Prisma.RepositorySnapshotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RepositorySnapshotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RepositorySnapshotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>[];
                };
                upsert: {
                    args: Prisma.RepositorySnapshotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RepositorySnapshotPayload>;
                };
                aggregate: {
                    args: Prisma.RepositorySnapshotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRepositorySnapshot>;
                };
                groupBy: {
                    args: Prisma.RepositorySnapshotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepositorySnapshotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RepositorySnapshotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepositorySnapshotCountAggregateOutputType> | number;
                };
            };
        };
        LanguageStatistic: {
            payload: Prisma.$LanguageStatisticPayload<ExtArgs>;
            fields: Prisma.LanguageStatisticFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LanguageStatisticFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LanguageStatisticFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                findFirst: {
                    args: Prisma.LanguageStatisticFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LanguageStatisticFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                findMany: {
                    args: Prisma.LanguageStatisticFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>[];
                };
                create: {
                    args: Prisma.LanguageStatisticCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                createMany: {
                    args: Prisma.LanguageStatisticCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LanguageStatisticCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>[];
                };
                delete: {
                    args: Prisma.LanguageStatisticDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                update: {
                    args: Prisma.LanguageStatisticUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                deleteMany: {
                    args: Prisma.LanguageStatisticDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LanguageStatisticUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LanguageStatisticUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>[];
                };
                upsert: {
                    args: Prisma.LanguageStatisticUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguageStatisticPayload>;
                };
                aggregate: {
                    args: Prisma.LanguageStatisticAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLanguageStatistic>;
                };
                groupBy: {
                    args: Prisma.LanguageStatisticGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageStatisticGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LanguageStatisticCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageStatisticCountAggregateOutputType> | number;
                };
            };
        };
        TechnologyDetection: {
            payload: Prisma.$TechnologyDetectionPayload<ExtArgs>;
            fields: Prisma.TechnologyDetectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TechnologyDetectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TechnologyDetectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                findFirst: {
                    args: Prisma.TechnologyDetectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TechnologyDetectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                findMany: {
                    args: Prisma.TechnologyDetectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>[];
                };
                create: {
                    args: Prisma.TechnologyDetectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                createMany: {
                    args: Prisma.TechnologyDetectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TechnologyDetectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>[];
                };
                delete: {
                    args: Prisma.TechnologyDetectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                update: {
                    args: Prisma.TechnologyDetectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                deleteMany: {
                    args: Prisma.TechnologyDetectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TechnologyDetectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TechnologyDetectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>[];
                };
                upsert: {
                    args: Prisma.TechnologyDetectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TechnologyDetectionPayload>;
                };
                aggregate: {
                    args: Prisma.TechnologyDetectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTechnologyDetection>;
                };
                groupBy: {
                    args: Prisma.TechnologyDetectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TechnologyDetectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TechnologyDetectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TechnologyDetectionCountAggregateOutputType> | number;
                };
            };
        };
        AiExplanation: {
            payload: Prisma.$AiExplanationPayload<ExtArgs>;
            fields: Prisma.AiExplanationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AiExplanationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AiExplanationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                findFirst: {
                    args: Prisma.AiExplanationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AiExplanationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                findMany: {
                    args: Prisma.AiExplanationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>[];
                };
                create: {
                    args: Prisma.AiExplanationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                createMany: {
                    args: Prisma.AiExplanationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AiExplanationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>[];
                };
                delete: {
                    args: Prisma.AiExplanationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                update: {
                    args: Prisma.AiExplanationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                deleteMany: {
                    args: Prisma.AiExplanationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AiExplanationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AiExplanationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>[];
                };
                upsert: {
                    args: Prisma.AiExplanationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiExplanationPayload>;
                };
                aggregate: {
                    args: Prisma.AiExplanationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAiExplanation>;
                };
                groupBy: {
                    args: Prisma.AiExplanationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AiExplanationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AiExplanationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AiExplanationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>;
export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    repository?: Prisma.RepositoryOmit;
    repositorySnapshot?: Prisma.RepositorySnapshotOmit;
    languageStatistic?: Prisma.LanguageStatisticOmit;
    technologyDetection?: Prisma.TechnologyDetectionOmit;
    aiExplanation?: Prisma.AiExplanationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
