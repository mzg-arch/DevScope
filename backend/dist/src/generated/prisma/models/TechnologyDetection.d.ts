import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TechnologyDetectionModel = runtime.Types.Result.DefaultSelection<Prisma.$TechnologyDetectionPayload>;
export type AggregateTechnologyDetection = {
    _count: TechnologyDetectionCountAggregateOutputType | null;
    _min: TechnologyDetectionMinAggregateOutputType | null;
    _max: TechnologyDetectionMaxAggregateOutputType | null;
};
export type TechnologyDetectionMinAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    name: string | null;
    category: string | null;
    confidence: string | null;
    createdAt: Date | null;
};
export type TechnologyDetectionMaxAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    name: string | null;
    category: string | null;
    confidence: string | null;
    createdAt: Date | null;
};
export type TechnologyDetectionCountAggregateOutputType = {
    id: number;
    snapshotId: number;
    name: number;
    category: number;
    confidence: number;
    evidence: number;
    createdAt: number;
    _all: number;
};
export type TechnologyDetectionMinAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    category?: true;
    confidence?: true;
    createdAt?: true;
};
export type TechnologyDetectionMaxAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    category?: true;
    confidence?: true;
    createdAt?: true;
};
export type TechnologyDetectionCountAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    category?: true;
    confidence?: true;
    evidence?: true;
    createdAt?: true;
    _all?: true;
};
export type TechnologyDetectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnologyDetectionWhereInput;
    orderBy?: Prisma.TechnologyDetectionOrderByWithRelationInput | Prisma.TechnologyDetectionOrderByWithRelationInput[];
    cursor?: Prisma.TechnologyDetectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TechnologyDetectionCountAggregateInputType;
    _min?: TechnologyDetectionMinAggregateInputType;
    _max?: TechnologyDetectionMaxAggregateInputType;
};
export type GetTechnologyDetectionAggregateType<T extends TechnologyDetectionAggregateArgs> = {
    [P in keyof T & keyof AggregateTechnologyDetection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTechnologyDetection[P]> : Prisma.GetScalarType<T[P], AggregateTechnologyDetection[P]>;
};
export type TechnologyDetectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnologyDetectionWhereInput;
    orderBy?: Prisma.TechnologyDetectionOrderByWithAggregationInput | Prisma.TechnologyDetectionOrderByWithAggregationInput[];
    by: Prisma.TechnologyDetectionScalarFieldEnum[] | Prisma.TechnologyDetectionScalarFieldEnum;
    having?: Prisma.TechnologyDetectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TechnologyDetectionCountAggregateInputType | true;
    _min?: TechnologyDetectionMinAggregateInputType;
    _max?: TechnologyDetectionMaxAggregateInputType;
};
export type TechnologyDetectionGroupByOutputType = {
    id: string;
    snapshotId: string;
    name: string;
    category: string;
    confidence: string;
    evidence: string[];
    createdAt: Date;
    _count: TechnologyDetectionCountAggregateOutputType | null;
    _min: TechnologyDetectionMinAggregateOutputType | null;
    _max: TechnologyDetectionMaxAggregateOutputType | null;
};
export type GetTechnologyDetectionGroupByPayload<T extends TechnologyDetectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TechnologyDetectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TechnologyDetectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TechnologyDetectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TechnologyDetectionGroupByOutputType[P]>;
}>>;
export type TechnologyDetectionWhereInput = {
    AND?: Prisma.TechnologyDetectionWhereInput | Prisma.TechnologyDetectionWhereInput[];
    OR?: Prisma.TechnologyDetectionWhereInput[];
    NOT?: Prisma.TechnologyDetectionWhereInput | Prisma.TechnologyDetectionWhereInput[];
    id?: Prisma.StringFilter<"TechnologyDetection"> | string;
    snapshotId?: Prisma.StringFilter<"TechnologyDetection"> | string;
    name?: Prisma.StringFilter<"TechnologyDetection"> | string;
    category?: Prisma.StringFilter<"TechnologyDetection"> | string;
    confidence?: Prisma.StringFilter<"TechnologyDetection"> | string;
    evidence?: Prisma.StringNullableListFilter<"TechnologyDetection">;
    createdAt?: Prisma.DateTimeFilter<"TechnologyDetection"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
};
export type TechnologyDetectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    evidence?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    snapshot?: Prisma.RepositorySnapshotOrderByWithRelationInput;
};
export type TechnologyDetectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    snapshotId_category_name?: Prisma.TechnologyDetectionSnapshotIdCategoryNameCompoundUniqueInput;
    AND?: Prisma.TechnologyDetectionWhereInput | Prisma.TechnologyDetectionWhereInput[];
    OR?: Prisma.TechnologyDetectionWhereInput[];
    NOT?: Prisma.TechnologyDetectionWhereInput | Prisma.TechnologyDetectionWhereInput[];
    snapshotId?: Prisma.StringFilter<"TechnologyDetection"> | string;
    name?: Prisma.StringFilter<"TechnologyDetection"> | string;
    category?: Prisma.StringFilter<"TechnologyDetection"> | string;
    confidence?: Prisma.StringFilter<"TechnologyDetection"> | string;
    evidence?: Prisma.StringNullableListFilter<"TechnologyDetection">;
    createdAt?: Prisma.DateTimeFilter<"TechnologyDetection"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
}, "id" | "snapshotId_category_name">;
export type TechnologyDetectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    evidence?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TechnologyDetectionCountOrderByAggregateInput;
    _max?: Prisma.TechnologyDetectionMaxOrderByAggregateInput;
    _min?: Prisma.TechnologyDetectionMinOrderByAggregateInput;
};
export type TechnologyDetectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TechnologyDetectionScalarWhereWithAggregatesInput | Prisma.TechnologyDetectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TechnologyDetectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TechnologyDetectionScalarWhereWithAggregatesInput | Prisma.TechnologyDetectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TechnologyDetection"> | string;
    snapshotId?: Prisma.StringWithAggregatesFilter<"TechnologyDetection"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TechnologyDetection"> | string;
    category?: Prisma.StringWithAggregatesFilter<"TechnologyDetection"> | string;
    confidence?: Prisma.StringWithAggregatesFilter<"TechnologyDetection"> | string;
    evidence?: Prisma.StringNullableListFilter<"TechnologyDetection">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TechnologyDetection"> | Date | string;
};
export type TechnologyDetectionCreateInput = {
    id?: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
    snapshot: Prisma.RepositorySnapshotCreateNestedOneWithoutTechnologiesInput;
};
export type TechnologyDetectionUncheckedCreateInput = {
    id?: string;
    snapshotId: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
};
export type TechnologyDetectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshot?: Prisma.RepositorySnapshotUpdateOneRequiredWithoutTechnologiesNestedInput;
};
export type TechnologyDetectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionCreateManyInput = {
    id?: string;
    snapshotId: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
};
export type TechnologyDetectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionListRelationFilter = {
    every?: Prisma.TechnologyDetectionWhereInput;
    some?: Prisma.TechnologyDetectionWhereInput;
    none?: Prisma.TechnologyDetectionWhereInput;
};
export type TechnologyDetectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TechnologyDetectionSnapshotIdCategoryNameCompoundUniqueInput = {
    snapshotId: string;
    category: string;
    name: string;
};
export type TechnologyDetectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    evidence?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TechnologyDetectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TechnologyDetectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TechnologyDetectionCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput> | Prisma.TechnologyDetectionCreateWithoutSnapshotInput[] | Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput | Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.TechnologyDetectionCreateManySnapshotInputEnvelope;
    connect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
};
export type TechnologyDetectionUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput> | Prisma.TechnologyDetectionCreateWithoutSnapshotInput[] | Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput | Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.TechnologyDetectionCreateManySnapshotInputEnvelope;
    connect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
};
export type TechnologyDetectionUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput> | Prisma.TechnologyDetectionCreateWithoutSnapshotInput[] | Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput | Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.TechnologyDetectionUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.TechnologyDetectionUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.TechnologyDetectionCreateManySnapshotInputEnvelope;
    set?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    disconnect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    delete?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    connect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    update?: Prisma.TechnologyDetectionUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.TechnologyDetectionUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.TechnologyDetectionUpdateManyWithWhereWithoutSnapshotInput | Prisma.TechnologyDetectionUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.TechnologyDetectionScalarWhereInput | Prisma.TechnologyDetectionScalarWhereInput[];
};
export type TechnologyDetectionUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput> | Prisma.TechnologyDetectionCreateWithoutSnapshotInput[] | Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput | Prisma.TechnologyDetectionCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.TechnologyDetectionUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.TechnologyDetectionUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.TechnologyDetectionCreateManySnapshotInputEnvelope;
    set?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    disconnect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    delete?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    connect?: Prisma.TechnologyDetectionWhereUniqueInput | Prisma.TechnologyDetectionWhereUniqueInput[];
    update?: Prisma.TechnologyDetectionUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.TechnologyDetectionUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.TechnologyDetectionUpdateManyWithWhereWithoutSnapshotInput | Prisma.TechnologyDetectionUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.TechnologyDetectionScalarWhereInput | Prisma.TechnologyDetectionScalarWhereInput[];
};
export type TechnologyDetectionCreateevidenceInput = {
    set: string[];
};
export type TechnologyDetectionUpdateevidenceInput = {
    set?: string[];
    push?: string | string[];
};
export type TechnologyDetectionCreateWithoutSnapshotInput = {
    id?: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
};
export type TechnologyDetectionUncheckedCreateWithoutSnapshotInput = {
    id?: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
};
export type TechnologyDetectionCreateOrConnectWithoutSnapshotInput = {
    where: Prisma.TechnologyDetectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput>;
};
export type TechnologyDetectionCreateManySnapshotInputEnvelope = {
    data: Prisma.TechnologyDetectionCreateManySnapshotInput | Prisma.TechnologyDetectionCreateManySnapshotInput[];
    skipDuplicates?: boolean;
};
export type TechnologyDetectionUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.TechnologyDetectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TechnologyDetectionUpdateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedUpdateWithoutSnapshotInput>;
    create: Prisma.XOR<Prisma.TechnologyDetectionCreateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedCreateWithoutSnapshotInput>;
};
export type TechnologyDetectionUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.TechnologyDetectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TechnologyDetectionUpdateWithoutSnapshotInput, Prisma.TechnologyDetectionUncheckedUpdateWithoutSnapshotInput>;
};
export type TechnologyDetectionUpdateManyWithWhereWithoutSnapshotInput = {
    where: Prisma.TechnologyDetectionScalarWhereInput;
    data: Prisma.XOR<Prisma.TechnologyDetectionUpdateManyMutationInput, Prisma.TechnologyDetectionUncheckedUpdateManyWithoutSnapshotInput>;
};
export type TechnologyDetectionScalarWhereInput = {
    AND?: Prisma.TechnologyDetectionScalarWhereInput | Prisma.TechnologyDetectionScalarWhereInput[];
    OR?: Prisma.TechnologyDetectionScalarWhereInput[];
    NOT?: Prisma.TechnologyDetectionScalarWhereInput | Prisma.TechnologyDetectionScalarWhereInput[];
    id?: Prisma.StringFilter<"TechnologyDetection"> | string;
    snapshotId?: Prisma.StringFilter<"TechnologyDetection"> | string;
    name?: Prisma.StringFilter<"TechnologyDetection"> | string;
    category?: Prisma.StringFilter<"TechnologyDetection"> | string;
    confidence?: Prisma.StringFilter<"TechnologyDetection"> | string;
    evidence?: Prisma.StringNullableListFilter<"TechnologyDetection">;
    createdAt?: Prisma.DateTimeFilter<"TechnologyDetection"> | Date | string;
};
export type TechnologyDetectionCreateManySnapshotInput = {
    id?: string;
    name: string;
    category: string;
    confidence: string;
    evidence?: Prisma.TechnologyDetectionCreateevidenceInput | string[];
    createdAt?: Date | string;
};
export type TechnologyDetectionUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionUncheckedUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionUncheckedUpdateManyWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.StringFieldUpdateOperationsInput | string;
    evidence?: Prisma.TechnologyDetectionUpdateevidenceInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnologyDetectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    category?: boolean;
    confidence?: boolean;
    evidence?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technologyDetection"]>;
export type TechnologyDetectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    category?: boolean;
    confidence?: boolean;
    evidence?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technologyDetection"]>;
export type TechnologyDetectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    category?: boolean;
    confidence?: boolean;
    evidence?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technologyDetection"]>;
export type TechnologyDetectionSelectScalar = {
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    category?: boolean;
    confidence?: boolean;
    evidence?: boolean;
    createdAt?: boolean;
};
export type TechnologyDetectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "snapshotId" | "name" | "category" | "confidence" | "evidence" | "createdAt", ExtArgs["result"]["technologyDetection"]>;
export type TechnologyDetectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type TechnologyDetectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type TechnologyDetectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type $TechnologyDetectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TechnologyDetection";
    objects: {
        snapshot: Prisma.$RepositorySnapshotPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        snapshotId: string;
        name: string;
        category: string;
        confidence: string;
        evidence: string[];
        createdAt: Date;
    }, ExtArgs["result"]["technologyDetection"]>;
    composites: {};
};
export type TechnologyDetectionGetPayload<S extends boolean | null | undefined | TechnologyDetectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload, S>;
export type TechnologyDetectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TechnologyDetectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TechnologyDetectionCountAggregateInputType | true;
};
export interface TechnologyDetectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TechnologyDetection'];
        meta: {
            name: 'TechnologyDetection';
        };
    };
    findUnique<T extends TechnologyDetectionFindUniqueArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TechnologyDetectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TechnologyDetectionFindFirstArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TechnologyDetectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TechnologyDetectionFindManyArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TechnologyDetectionCreateArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionCreateArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TechnologyDetectionCreateManyArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TechnologyDetectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TechnologyDetectionDeleteArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionDeleteArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TechnologyDetectionUpdateArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionUpdateArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TechnologyDetectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TechnologyDetectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TechnologyDetectionUpdateManyArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TechnologyDetectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TechnologyDetectionUpsertArgs>(args: Prisma.SelectSubset<T, TechnologyDetectionUpsertArgs<ExtArgs>>): Prisma.Prisma__TechnologyDetectionClient<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TechnologyDetectionCountArgs>(args?: Prisma.Subset<T, TechnologyDetectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TechnologyDetectionCountAggregateOutputType> : number>;
    aggregate<T extends TechnologyDetectionAggregateArgs>(args: Prisma.Subset<T, TechnologyDetectionAggregateArgs>): Prisma.PrismaPromise<GetTechnologyDetectionAggregateType<T>>;
    groupBy<T extends TechnologyDetectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TechnologyDetectionGroupByArgs['orderBy'];
    } : {
        orderBy?: TechnologyDetectionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TechnologyDetectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnologyDetectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TechnologyDetectionFieldRefs;
}
export interface Prisma__TechnologyDetectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    snapshot<T extends Prisma.RepositorySnapshotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshotDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TechnologyDetectionFieldRefs {
    readonly id: Prisma.FieldRef<"TechnologyDetection", 'String'>;
    readonly snapshotId: Prisma.FieldRef<"TechnologyDetection", 'String'>;
    readonly name: Prisma.FieldRef<"TechnologyDetection", 'String'>;
    readonly category: Prisma.FieldRef<"TechnologyDetection", 'String'>;
    readonly confidence: Prisma.FieldRef<"TechnologyDetection", 'String'>;
    readonly evidence: Prisma.FieldRef<"TechnologyDetection", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"TechnologyDetection", 'DateTime'>;
}
export type TechnologyDetectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where: Prisma.TechnologyDetectionWhereUniqueInput;
};
export type TechnologyDetectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where: Prisma.TechnologyDetectionWhereUniqueInput;
};
export type TechnologyDetectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where?: Prisma.TechnologyDetectionWhereInput;
    orderBy?: Prisma.TechnologyDetectionOrderByWithRelationInput | Prisma.TechnologyDetectionOrderByWithRelationInput[];
    cursor?: Prisma.TechnologyDetectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TechnologyDetectionScalarFieldEnum | Prisma.TechnologyDetectionScalarFieldEnum[];
};
export type TechnologyDetectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where?: Prisma.TechnologyDetectionWhereInput;
    orderBy?: Prisma.TechnologyDetectionOrderByWithRelationInput | Prisma.TechnologyDetectionOrderByWithRelationInput[];
    cursor?: Prisma.TechnologyDetectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TechnologyDetectionScalarFieldEnum | Prisma.TechnologyDetectionScalarFieldEnum[];
};
export type TechnologyDetectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where?: Prisma.TechnologyDetectionWhereInput;
    orderBy?: Prisma.TechnologyDetectionOrderByWithRelationInput | Prisma.TechnologyDetectionOrderByWithRelationInput[];
    cursor?: Prisma.TechnologyDetectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TechnologyDetectionScalarFieldEnum | Prisma.TechnologyDetectionScalarFieldEnum[];
};
export type TechnologyDetectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnologyDetectionCreateInput, Prisma.TechnologyDetectionUncheckedCreateInput>;
};
export type TechnologyDetectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TechnologyDetectionCreateManyInput | Prisma.TechnologyDetectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TechnologyDetectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    data: Prisma.TechnologyDetectionCreateManyInput | Prisma.TechnologyDetectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TechnologyDetectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TechnologyDetectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnologyDetectionUpdateInput, Prisma.TechnologyDetectionUncheckedUpdateInput>;
    where: Prisma.TechnologyDetectionWhereUniqueInput;
};
export type TechnologyDetectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TechnologyDetectionUpdateManyMutationInput, Prisma.TechnologyDetectionUncheckedUpdateManyInput>;
    where?: Prisma.TechnologyDetectionWhereInput;
    limit?: number;
};
export type TechnologyDetectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnologyDetectionUpdateManyMutationInput, Prisma.TechnologyDetectionUncheckedUpdateManyInput>;
    where?: Prisma.TechnologyDetectionWhereInput;
    limit?: number;
    include?: Prisma.TechnologyDetectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TechnologyDetectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where: Prisma.TechnologyDetectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnologyDetectionCreateInput, Prisma.TechnologyDetectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TechnologyDetectionUpdateInput, Prisma.TechnologyDetectionUncheckedUpdateInput>;
};
export type TechnologyDetectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
    where: Prisma.TechnologyDetectionWhereUniqueInput;
};
export type TechnologyDetectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnologyDetectionWhereInput;
    limit?: number;
};
export type TechnologyDetectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnologyDetectionSelect<ExtArgs> | null;
    omit?: Prisma.TechnologyDetectionOmit<ExtArgs> | null;
    include?: Prisma.TechnologyDetectionInclude<ExtArgs> | null;
};
