import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LanguageStatisticModel = runtime.Types.Result.DefaultSelection<Prisma.$LanguageStatisticPayload>;
export type AggregateLanguageStatistic = {
    _count: LanguageStatisticCountAggregateOutputType | null;
    _avg: LanguageStatisticAvgAggregateOutputType | null;
    _sum: LanguageStatisticSumAggregateOutputType | null;
    _min: LanguageStatisticMinAggregateOutputType | null;
    _max: LanguageStatisticMaxAggregateOutputType | null;
};
export type LanguageStatisticAvgAggregateOutputType = {
    fileCount: number | null;
    percentage: number | null;
};
export type LanguageStatisticSumAggregateOutputType = {
    fileCount: number | null;
    percentage: number | null;
};
export type LanguageStatisticMinAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    name: string | null;
    fileCount: number | null;
    percentage: number | null;
    createdAt: Date | null;
};
export type LanguageStatisticMaxAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    name: string | null;
    fileCount: number | null;
    percentage: number | null;
    createdAt: Date | null;
};
export type LanguageStatisticCountAggregateOutputType = {
    id: number;
    snapshotId: number;
    name: number;
    fileCount: number;
    percentage: number;
    extensions: number;
    createdAt: number;
    _all: number;
};
export type LanguageStatisticAvgAggregateInputType = {
    fileCount?: true;
    percentage?: true;
};
export type LanguageStatisticSumAggregateInputType = {
    fileCount?: true;
    percentage?: true;
};
export type LanguageStatisticMinAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    fileCount?: true;
    percentage?: true;
    createdAt?: true;
};
export type LanguageStatisticMaxAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    fileCount?: true;
    percentage?: true;
    createdAt?: true;
};
export type LanguageStatisticCountAggregateInputType = {
    id?: true;
    snapshotId?: true;
    name?: true;
    fileCount?: true;
    percentage?: true;
    extensions?: true;
    createdAt?: true;
    _all?: true;
};
export type LanguageStatisticAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageStatisticWhereInput;
    orderBy?: Prisma.LanguageStatisticOrderByWithRelationInput | Prisma.LanguageStatisticOrderByWithRelationInput[];
    cursor?: Prisma.LanguageStatisticWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LanguageStatisticCountAggregateInputType;
    _avg?: LanguageStatisticAvgAggregateInputType;
    _sum?: LanguageStatisticSumAggregateInputType;
    _min?: LanguageStatisticMinAggregateInputType;
    _max?: LanguageStatisticMaxAggregateInputType;
};
export type GetLanguageStatisticAggregateType<T extends LanguageStatisticAggregateArgs> = {
    [P in keyof T & keyof AggregateLanguageStatistic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLanguageStatistic[P]> : Prisma.GetScalarType<T[P], AggregateLanguageStatistic[P]>;
};
export type LanguageStatisticGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageStatisticWhereInput;
    orderBy?: Prisma.LanguageStatisticOrderByWithAggregationInput | Prisma.LanguageStatisticOrderByWithAggregationInput[];
    by: Prisma.LanguageStatisticScalarFieldEnum[] | Prisma.LanguageStatisticScalarFieldEnum;
    having?: Prisma.LanguageStatisticScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LanguageStatisticCountAggregateInputType | true;
    _avg?: LanguageStatisticAvgAggregateInputType;
    _sum?: LanguageStatisticSumAggregateInputType;
    _min?: LanguageStatisticMinAggregateInputType;
    _max?: LanguageStatisticMaxAggregateInputType;
};
export type LanguageStatisticGroupByOutputType = {
    id: string;
    snapshotId: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions: string[];
    createdAt: Date;
    _count: LanguageStatisticCountAggregateOutputType | null;
    _avg: LanguageStatisticAvgAggregateOutputType | null;
    _sum: LanguageStatisticSumAggregateOutputType | null;
    _min: LanguageStatisticMinAggregateOutputType | null;
    _max: LanguageStatisticMaxAggregateOutputType | null;
};
export type GetLanguageStatisticGroupByPayload<T extends LanguageStatisticGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LanguageStatisticGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LanguageStatisticGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LanguageStatisticGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LanguageStatisticGroupByOutputType[P]>;
}>>;
export type LanguageStatisticWhereInput = {
    AND?: Prisma.LanguageStatisticWhereInput | Prisma.LanguageStatisticWhereInput[];
    OR?: Prisma.LanguageStatisticWhereInput[];
    NOT?: Prisma.LanguageStatisticWhereInput | Prisma.LanguageStatisticWhereInput[];
    id?: Prisma.StringFilter<"LanguageStatistic"> | string;
    snapshotId?: Prisma.StringFilter<"LanguageStatistic"> | string;
    name?: Prisma.StringFilter<"LanguageStatistic"> | string;
    fileCount?: Prisma.IntFilter<"LanguageStatistic"> | number;
    percentage?: Prisma.FloatFilter<"LanguageStatistic"> | number;
    extensions?: Prisma.StringNullableListFilter<"LanguageStatistic">;
    createdAt?: Prisma.DateTimeFilter<"LanguageStatistic"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
};
export type LanguageStatisticOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    extensions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    snapshot?: Prisma.RepositorySnapshotOrderByWithRelationInput;
};
export type LanguageStatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    snapshotId_name?: Prisma.LanguageStatisticSnapshotIdNameCompoundUniqueInput;
    AND?: Prisma.LanguageStatisticWhereInput | Prisma.LanguageStatisticWhereInput[];
    OR?: Prisma.LanguageStatisticWhereInput[];
    NOT?: Prisma.LanguageStatisticWhereInput | Prisma.LanguageStatisticWhereInput[];
    snapshotId?: Prisma.StringFilter<"LanguageStatistic"> | string;
    name?: Prisma.StringFilter<"LanguageStatistic"> | string;
    fileCount?: Prisma.IntFilter<"LanguageStatistic"> | number;
    percentage?: Prisma.FloatFilter<"LanguageStatistic"> | number;
    extensions?: Prisma.StringNullableListFilter<"LanguageStatistic">;
    createdAt?: Prisma.DateTimeFilter<"LanguageStatistic"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
}, "id" | "snapshotId_name">;
export type LanguageStatisticOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    extensions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LanguageStatisticCountOrderByAggregateInput;
    _avg?: Prisma.LanguageStatisticAvgOrderByAggregateInput;
    _max?: Prisma.LanguageStatisticMaxOrderByAggregateInput;
    _min?: Prisma.LanguageStatisticMinOrderByAggregateInput;
    _sum?: Prisma.LanguageStatisticSumOrderByAggregateInput;
};
export type LanguageStatisticScalarWhereWithAggregatesInput = {
    AND?: Prisma.LanguageStatisticScalarWhereWithAggregatesInput | Prisma.LanguageStatisticScalarWhereWithAggregatesInput[];
    OR?: Prisma.LanguageStatisticScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LanguageStatisticScalarWhereWithAggregatesInput | Prisma.LanguageStatisticScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LanguageStatistic"> | string;
    snapshotId?: Prisma.StringWithAggregatesFilter<"LanguageStatistic"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LanguageStatistic"> | string;
    fileCount?: Prisma.IntWithAggregatesFilter<"LanguageStatistic"> | number;
    percentage?: Prisma.FloatWithAggregatesFilter<"LanguageStatistic"> | number;
    extensions?: Prisma.StringNullableListFilter<"LanguageStatistic">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LanguageStatistic"> | Date | string;
};
export type LanguageStatisticCreateInput = {
    id?: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
    snapshot: Prisma.RepositorySnapshotCreateNestedOneWithoutLanguagesInput;
};
export type LanguageStatisticUncheckedCreateInput = {
    id?: string;
    snapshotId: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
};
export type LanguageStatisticUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshot?: Prisma.RepositorySnapshotUpdateOneRequiredWithoutLanguagesNestedInput;
};
export type LanguageStatisticUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticCreateManyInput = {
    id?: string;
    snapshotId: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
};
export type LanguageStatisticUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticListRelationFilter = {
    every?: Prisma.LanguageStatisticWhereInput;
    some?: Prisma.LanguageStatisticWhereInput;
    none?: Prisma.LanguageStatisticWhereInput;
};
export type LanguageStatisticOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LanguageStatisticSnapshotIdNameCompoundUniqueInput = {
    snapshotId: string;
    name: string;
};
export type LanguageStatisticCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    extensions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LanguageStatisticAvgOrderByAggregateInput = {
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type LanguageStatisticMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LanguageStatisticMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LanguageStatisticSumOrderByAggregateInput = {
    fileCount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type LanguageStatisticCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput> | Prisma.LanguageStatisticCreateWithoutSnapshotInput[] | Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput | Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.LanguageStatisticCreateManySnapshotInputEnvelope;
    connect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
};
export type LanguageStatisticUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput> | Prisma.LanguageStatisticCreateWithoutSnapshotInput[] | Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput | Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.LanguageStatisticCreateManySnapshotInputEnvelope;
    connect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
};
export type LanguageStatisticUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput> | Prisma.LanguageStatisticCreateWithoutSnapshotInput[] | Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput | Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.LanguageStatisticUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.LanguageStatisticUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.LanguageStatisticCreateManySnapshotInputEnvelope;
    set?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    disconnect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    delete?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    connect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    update?: Prisma.LanguageStatisticUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.LanguageStatisticUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.LanguageStatisticUpdateManyWithWhereWithoutSnapshotInput | Prisma.LanguageStatisticUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.LanguageStatisticScalarWhereInput | Prisma.LanguageStatisticScalarWhereInput[];
};
export type LanguageStatisticUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput> | Prisma.LanguageStatisticCreateWithoutSnapshotInput[] | Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput | Prisma.LanguageStatisticCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.LanguageStatisticUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.LanguageStatisticUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.LanguageStatisticCreateManySnapshotInputEnvelope;
    set?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    disconnect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    delete?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    connect?: Prisma.LanguageStatisticWhereUniqueInput | Prisma.LanguageStatisticWhereUniqueInput[];
    update?: Prisma.LanguageStatisticUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.LanguageStatisticUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.LanguageStatisticUpdateManyWithWhereWithoutSnapshotInput | Prisma.LanguageStatisticUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.LanguageStatisticScalarWhereInput | Prisma.LanguageStatisticScalarWhereInput[];
};
export type LanguageStatisticCreateextensionsInput = {
    set: string[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LanguageStatisticUpdateextensionsInput = {
    set?: string[];
    push?: string | string[];
};
export type LanguageStatisticCreateWithoutSnapshotInput = {
    id?: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
};
export type LanguageStatisticUncheckedCreateWithoutSnapshotInput = {
    id?: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
};
export type LanguageStatisticCreateOrConnectWithoutSnapshotInput = {
    where: Prisma.LanguageStatisticWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput>;
};
export type LanguageStatisticCreateManySnapshotInputEnvelope = {
    data: Prisma.LanguageStatisticCreateManySnapshotInput | Prisma.LanguageStatisticCreateManySnapshotInput[];
    skipDuplicates?: boolean;
};
export type LanguageStatisticUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.LanguageStatisticWhereUniqueInput;
    update: Prisma.XOR<Prisma.LanguageStatisticUpdateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedUpdateWithoutSnapshotInput>;
    create: Prisma.XOR<Prisma.LanguageStatisticCreateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedCreateWithoutSnapshotInput>;
};
export type LanguageStatisticUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.LanguageStatisticWhereUniqueInput;
    data: Prisma.XOR<Prisma.LanguageStatisticUpdateWithoutSnapshotInput, Prisma.LanguageStatisticUncheckedUpdateWithoutSnapshotInput>;
};
export type LanguageStatisticUpdateManyWithWhereWithoutSnapshotInput = {
    where: Prisma.LanguageStatisticScalarWhereInput;
    data: Prisma.XOR<Prisma.LanguageStatisticUpdateManyMutationInput, Prisma.LanguageStatisticUncheckedUpdateManyWithoutSnapshotInput>;
};
export type LanguageStatisticScalarWhereInput = {
    AND?: Prisma.LanguageStatisticScalarWhereInput | Prisma.LanguageStatisticScalarWhereInput[];
    OR?: Prisma.LanguageStatisticScalarWhereInput[];
    NOT?: Prisma.LanguageStatisticScalarWhereInput | Prisma.LanguageStatisticScalarWhereInput[];
    id?: Prisma.StringFilter<"LanguageStatistic"> | string;
    snapshotId?: Prisma.StringFilter<"LanguageStatistic"> | string;
    name?: Prisma.StringFilter<"LanguageStatistic"> | string;
    fileCount?: Prisma.IntFilter<"LanguageStatistic"> | number;
    percentage?: Prisma.FloatFilter<"LanguageStatistic"> | number;
    extensions?: Prisma.StringNullableListFilter<"LanguageStatistic">;
    createdAt?: Prisma.DateTimeFilter<"LanguageStatistic"> | Date | string;
};
export type LanguageStatisticCreateManySnapshotInput = {
    id?: string;
    name: string;
    fileCount: number;
    percentage: number;
    extensions?: Prisma.LanguageStatisticCreateextensionsInput | string[];
    createdAt?: Date | string;
};
export type LanguageStatisticUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticUncheckedUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticUncheckedUpdateManyWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fileCount?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    extensions?: Prisma.LanguageStatisticUpdateextensionsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageStatisticSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    fileCount?: boolean;
    percentage?: boolean;
    extensions?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["languageStatistic"]>;
export type LanguageStatisticSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    fileCount?: boolean;
    percentage?: boolean;
    extensions?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["languageStatistic"]>;
export type LanguageStatisticSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    fileCount?: boolean;
    percentage?: boolean;
    extensions?: boolean;
    createdAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["languageStatistic"]>;
export type LanguageStatisticSelectScalar = {
    id?: boolean;
    snapshotId?: boolean;
    name?: boolean;
    fileCount?: boolean;
    percentage?: boolean;
    extensions?: boolean;
    createdAt?: boolean;
};
export type LanguageStatisticOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "snapshotId" | "name" | "fileCount" | "percentage" | "extensions" | "createdAt", ExtArgs["result"]["languageStatistic"]>;
export type LanguageStatisticInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type LanguageStatisticIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type LanguageStatisticIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type $LanguageStatisticPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LanguageStatistic";
    objects: {
        snapshot: Prisma.$RepositorySnapshotPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        snapshotId: string;
        name: string;
        fileCount: number;
        percentage: number;
        extensions: string[];
        createdAt: Date;
    }, ExtArgs["result"]["languageStatistic"]>;
    composites: {};
};
export type LanguageStatisticGetPayload<S extends boolean | null | undefined | LanguageStatisticDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload, S>;
export type LanguageStatisticCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LanguageStatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LanguageStatisticCountAggregateInputType | true;
};
export interface LanguageStatisticDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LanguageStatistic'];
        meta: {
            name: 'LanguageStatistic';
        };
    };
    findUnique<T extends LanguageStatisticFindUniqueArgs>(args: Prisma.SelectSubset<T, LanguageStatisticFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LanguageStatisticFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LanguageStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LanguageStatisticFindFirstArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticFindFirstArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LanguageStatisticFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LanguageStatisticFindManyArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LanguageStatisticCreateArgs>(args: Prisma.SelectSubset<T, LanguageStatisticCreateArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LanguageStatisticCreateManyArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LanguageStatisticCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LanguageStatisticDeleteArgs>(args: Prisma.SelectSubset<T, LanguageStatisticDeleteArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LanguageStatisticUpdateArgs>(args: Prisma.SelectSubset<T, LanguageStatisticUpdateArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LanguageStatisticDeleteManyArgs>(args?: Prisma.SelectSubset<T, LanguageStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LanguageStatisticUpdateManyArgs>(args: Prisma.SelectSubset<T, LanguageStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LanguageStatisticUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LanguageStatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LanguageStatisticUpsertArgs>(args: Prisma.SelectSubset<T, LanguageStatisticUpsertArgs<ExtArgs>>): Prisma.Prisma__LanguageStatisticClient<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LanguageStatisticCountArgs>(args?: Prisma.Subset<T, LanguageStatisticCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LanguageStatisticCountAggregateOutputType> : number>;
    aggregate<T extends LanguageStatisticAggregateArgs>(args: Prisma.Subset<T, LanguageStatisticAggregateArgs>): Prisma.PrismaPromise<GetLanguageStatisticAggregateType<T>>;
    groupBy<T extends LanguageStatisticGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LanguageStatisticGroupByArgs['orderBy'];
    } : {
        orderBy?: LanguageStatisticGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LanguageStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LanguageStatisticFieldRefs;
}
export interface Prisma__LanguageStatisticClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    snapshot<T extends Prisma.RepositorySnapshotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshotDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LanguageStatisticFieldRefs {
    readonly id: Prisma.FieldRef<"LanguageStatistic", 'String'>;
    readonly snapshotId: Prisma.FieldRef<"LanguageStatistic", 'String'>;
    readonly name: Prisma.FieldRef<"LanguageStatistic", 'String'>;
    readonly fileCount: Prisma.FieldRef<"LanguageStatistic", 'Int'>;
    readonly percentage: Prisma.FieldRef<"LanguageStatistic", 'Float'>;
    readonly extensions: Prisma.FieldRef<"LanguageStatistic", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"LanguageStatistic", 'DateTime'>;
}
export type LanguageStatisticFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where: Prisma.LanguageStatisticWhereUniqueInput;
};
export type LanguageStatisticFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where: Prisma.LanguageStatisticWhereUniqueInput;
};
export type LanguageStatisticFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where?: Prisma.LanguageStatisticWhereInput;
    orderBy?: Prisma.LanguageStatisticOrderByWithRelationInput | Prisma.LanguageStatisticOrderByWithRelationInput[];
    cursor?: Prisma.LanguageStatisticWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageStatisticScalarFieldEnum | Prisma.LanguageStatisticScalarFieldEnum[];
};
export type LanguageStatisticFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where?: Prisma.LanguageStatisticWhereInput;
    orderBy?: Prisma.LanguageStatisticOrderByWithRelationInput | Prisma.LanguageStatisticOrderByWithRelationInput[];
    cursor?: Prisma.LanguageStatisticWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageStatisticScalarFieldEnum | Prisma.LanguageStatisticScalarFieldEnum[];
};
export type LanguageStatisticFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where?: Prisma.LanguageStatisticWhereInput;
    orderBy?: Prisma.LanguageStatisticOrderByWithRelationInput | Prisma.LanguageStatisticOrderByWithRelationInput[];
    cursor?: Prisma.LanguageStatisticWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageStatisticScalarFieldEnum | Prisma.LanguageStatisticScalarFieldEnum[];
};
export type LanguageStatisticCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LanguageStatisticCreateInput, Prisma.LanguageStatisticUncheckedCreateInput>;
};
export type LanguageStatisticCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LanguageStatisticCreateManyInput | Prisma.LanguageStatisticCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LanguageStatisticCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    data: Prisma.LanguageStatisticCreateManyInput | Prisma.LanguageStatisticCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LanguageStatisticIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LanguageStatisticUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LanguageStatisticUpdateInput, Prisma.LanguageStatisticUncheckedUpdateInput>;
    where: Prisma.LanguageStatisticWhereUniqueInput;
};
export type LanguageStatisticUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LanguageStatisticUpdateManyMutationInput, Prisma.LanguageStatisticUncheckedUpdateManyInput>;
    where?: Prisma.LanguageStatisticWhereInput;
    limit?: number;
};
export type LanguageStatisticUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LanguageStatisticUpdateManyMutationInput, Prisma.LanguageStatisticUncheckedUpdateManyInput>;
    where?: Prisma.LanguageStatisticWhereInput;
    limit?: number;
    include?: Prisma.LanguageStatisticIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LanguageStatisticUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where: Prisma.LanguageStatisticWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageStatisticCreateInput, Prisma.LanguageStatisticUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LanguageStatisticUpdateInput, Prisma.LanguageStatisticUncheckedUpdateInput>;
};
export type LanguageStatisticDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
    where: Prisma.LanguageStatisticWhereUniqueInput;
};
export type LanguageStatisticDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageStatisticWhereInput;
    limit?: number;
};
export type LanguageStatisticDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageStatisticSelect<ExtArgs> | null;
    omit?: Prisma.LanguageStatisticOmit<ExtArgs> | null;
    include?: Prisma.LanguageStatisticInclude<ExtArgs> | null;
};
