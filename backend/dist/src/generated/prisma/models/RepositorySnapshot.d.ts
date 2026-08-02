import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RepositorySnapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$RepositorySnapshotPayload>;
export type AggregateRepositorySnapshot = {
    _count: RepositorySnapshotCountAggregateOutputType | null;
    _avg: RepositorySnapshotAvgAggregateOutputType | null;
    _sum: RepositorySnapshotSumAggregateOutputType | null;
    _min: RepositorySnapshotMinAggregateOutputType | null;
    _max: RepositorySnapshotMaxAggregateOutputType | null;
};
export type RepositorySnapshotAvgAggregateOutputType = {
    maximumReturnedItems: number | null;
    itemsAnalyzed: number | null;
};
export type RepositorySnapshotSumAggregateOutputType = {
    maximumReturnedItems: number | null;
    itemsAnalyzed: number | null;
};
export type RepositorySnapshotMinAggregateOutputType = {
    id: string | null;
    repositoryId: string | null;
    commitSha: string | null;
    branch: string | null;
    status: $Enums.AnalysisStatus | null;
    truncatedByGitHub: boolean | null;
    limitedByDevScope: boolean | null;
    maximumReturnedItems: number | null;
    itemsAnalyzed: number | null;
    analysisStartedAt: Date | null;
    analysisCompletedAt: Date | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepositorySnapshotMaxAggregateOutputType = {
    id: string | null;
    repositoryId: string | null;
    commitSha: string | null;
    branch: string | null;
    status: $Enums.AnalysisStatus | null;
    truncatedByGitHub: boolean | null;
    limitedByDevScope: boolean | null;
    maximumReturnedItems: number | null;
    itemsAnalyzed: number | null;
    analysisStartedAt: Date | null;
    analysisCompletedAt: Date | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepositorySnapshotCountAggregateOutputType = {
    id: number;
    repositoryId: number;
    commitSha: number;
    branch: number;
    status: number;
    treeData: number;
    truncatedByGitHub: number;
    limitedByDevScope: number;
    maximumReturnedItems: number;
    itemsAnalyzed: number;
    analysisStartedAt: number;
    analysisCompletedAt: number;
    failureReason: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RepositorySnapshotAvgAggregateInputType = {
    maximumReturnedItems?: true;
    itemsAnalyzed?: true;
};
export type RepositorySnapshotSumAggregateInputType = {
    maximumReturnedItems?: true;
    itemsAnalyzed?: true;
};
export type RepositorySnapshotMinAggregateInputType = {
    id?: true;
    repositoryId?: true;
    commitSha?: true;
    branch?: true;
    status?: true;
    truncatedByGitHub?: true;
    limitedByDevScope?: true;
    maximumReturnedItems?: true;
    itemsAnalyzed?: true;
    analysisStartedAt?: true;
    analysisCompletedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepositorySnapshotMaxAggregateInputType = {
    id?: true;
    repositoryId?: true;
    commitSha?: true;
    branch?: true;
    status?: true;
    truncatedByGitHub?: true;
    limitedByDevScope?: true;
    maximumReturnedItems?: true;
    itemsAnalyzed?: true;
    analysisStartedAt?: true;
    analysisCompletedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepositorySnapshotCountAggregateInputType = {
    id?: true;
    repositoryId?: true;
    commitSha?: true;
    branch?: true;
    status?: true;
    treeData?: true;
    truncatedByGitHub?: true;
    limitedByDevScope?: true;
    maximumReturnedItems?: true;
    itemsAnalyzed?: true;
    analysisStartedAt?: true;
    analysisCompletedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RepositorySnapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositorySnapshotWhereInput;
    orderBy?: Prisma.RepositorySnapshotOrderByWithRelationInput | Prisma.RepositorySnapshotOrderByWithRelationInput[];
    cursor?: Prisma.RepositorySnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RepositorySnapshotCountAggregateInputType;
    _avg?: RepositorySnapshotAvgAggregateInputType;
    _sum?: RepositorySnapshotSumAggregateInputType;
    _min?: RepositorySnapshotMinAggregateInputType;
    _max?: RepositorySnapshotMaxAggregateInputType;
};
export type GetRepositorySnapshotAggregateType<T extends RepositorySnapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateRepositorySnapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRepositorySnapshot[P]> : Prisma.GetScalarType<T[P], AggregateRepositorySnapshot[P]>;
};
export type RepositorySnapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositorySnapshotWhereInput;
    orderBy?: Prisma.RepositorySnapshotOrderByWithAggregationInput | Prisma.RepositorySnapshotOrderByWithAggregationInput[];
    by: Prisma.RepositorySnapshotScalarFieldEnum[] | Prisma.RepositorySnapshotScalarFieldEnum;
    having?: Prisma.RepositorySnapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RepositorySnapshotCountAggregateInputType | true;
    _avg?: RepositorySnapshotAvgAggregateInputType;
    _sum?: RepositorySnapshotSumAggregateInputType;
    _min?: RepositorySnapshotMinAggregateInputType;
    _max?: RepositorySnapshotMaxAggregateInputType;
};
export type RepositorySnapshotGroupByOutputType = {
    id: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status: $Enums.AnalysisStatus;
    treeData: runtime.JsonValue | null;
    truncatedByGitHub: boolean;
    limitedByDevScope: boolean;
    maximumReturnedItems: number;
    itemsAnalyzed: number;
    analysisStartedAt: Date | null;
    analysisCompletedAt: Date | null;
    failureReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RepositorySnapshotCountAggregateOutputType | null;
    _avg: RepositorySnapshotAvgAggregateOutputType | null;
    _sum: RepositorySnapshotSumAggregateOutputType | null;
    _min: RepositorySnapshotMinAggregateOutputType | null;
    _max: RepositorySnapshotMaxAggregateOutputType | null;
};
export type GetRepositorySnapshotGroupByPayload<T extends RepositorySnapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RepositorySnapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RepositorySnapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RepositorySnapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RepositorySnapshotGroupByOutputType[P]>;
}>>;
export type RepositorySnapshotWhereInput = {
    AND?: Prisma.RepositorySnapshotWhereInput | Prisma.RepositorySnapshotWhereInput[];
    OR?: Prisma.RepositorySnapshotWhereInput[];
    NOT?: Prisma.RepositorySnapshotWhereInput | Prisma.RepositorySnapshotWhereInput[];
    id?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    repositoryId?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    commitSha?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    branch?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    status?: Prisma.EnumAnalysisStatusFilter<"RepositorySnapshot"> | $Enums.AnalysisStatus;
    treeData?: Prisma.JsonNullableFilter<"RepositorySnapshot">;
    truncatedByGitHub?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    limitedByDevScope?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    maximumReturnedItems?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    itemsAnalyzed?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    analysisStartedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    analysisCompletedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    failureReason?: Prisma.StringNullableFilter<"RepositorySnapshot"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
    repository?: Prisma.XOR<Prisma.RepositoryScalarRelationFilter, Prisma.RepositoryWhereInput>;
    languages?: Prisma.LanguageStatisticListRelationFilter;
    technologies?: Prisma.TechnologyDetectionListRelationFilter;
    explanations?: Prisma.AiExplanationListRelationFilter;
};
export type RepositorySnapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    commitSha?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    treeData?: Prisma.SortOrderInput | Prisma.SortOrder;
    truncatedByGitHub?: Prisma.SortOrder;
    limitedByDevScope?: Prisma.SortOrder;
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
    analysisStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysisCompletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    repository?: Prisma.RepositoryOrderByWithRelationInput;
    languages?: Prisma.LanguageStatisticOrderByRelationAggregateInput;
    technologies?: Prisma.TechnologyDetectionOrderByRelationAggregateInput;
    explanations?: Prisma.AiExplanationOrderByRelationAggregateInput;
};
export type RepositorySnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    repositoryId_commitSha?: Prisma.RepositorySnapshotRepositoryIdCommitShaCompoundUniqueInput;
    AND?: Prisma.RepositorySnapshotWhereInput | Prisma.RepositorySnapshotWhereInput[];
    OR?: Prisma.RepositorySnapshotWhereInput[];
    NOT?: Prisma.RepositorySnapshotWhereInput | Prisma.RepositorySnapshotWhereInput[];
    repositoryId?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    commitSha?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    branch?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    status?: Prisma.EnumAnalysisStatusFilter<"RepositorySnapshot"> | $Enums.AnalysisStatus;
    treeData?: Prisma.JsonNullableFilter<"RepositorySnapshot">;
    truncatedByGitHub?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    limitedByDevScope?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    maximumReturnedItems?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    itemsAnalyzed?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    analysisStartedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    analysisCompletedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    failureReason?: Prisma.StringNullableFilter<"RepositorySnapshot"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
    repository?: Prisma.XOR<Prisma.RepositoryScalarRelationFilter, Prisma.RepositoryWhereInput>;
    languages?: Prisma.LanguageStatisticListRelationFilter;
    technologies?: Prisma.TechnologyDetectionListRelationFilter;
    explanations?: Prisma.AiExplanationListRelationFilter;
}, "id" | "repositoryId_commitSha">;
export type RepositorySnapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    commitSha?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    treeData?: Prisma.SortOrderInput | Prisma.SortOrder;
    truncatedByGitHub?: Prisma.SortOrder;
    limitedByDevScope?: Prisma.SortOrder;
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
    analysisStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysisCompletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RepositorySnapshotCountOrderByAggregateInput;
    _avg?: Prisma.RepositorySnapshotAvgOrderByAggregateInput;
    _max?: Prisma.RepositorySnapshotMaxOrderByAggregateInput;
    _min?: Prisma.RepositorySnapshotMinOrderByAggregateInput;
    _sum?: Prisma.RepositorySnapshotSumOrderByAggregateInput;
};
export type RepositorySnapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.RepositorySnapshotScalarWhereWithAggregatesInput | Prisma.RepositorySnapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.RepositorySnapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RepositorySnapshotScalarWhereWithAggregatesInput | Prisma.RepositorySnapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RepositorySnapshot"> | string;
    repositoryId?: Prisma.StringWithAggregatesFilter<"RepositorySnapshot"> | string;
    commitSha?: Prisma.StringWithAggregatesFilter<"RepositorySnapshot"> | string;
    branch?: Prisma.StringWithAggregatesFilter<"RepositorySnapshot"> | string;
    status?: Prisma.EnumAnalysisStatusWithAggregatesFilter<"RepositorySnapshot"> | $Enums.AnalysisStatus;
    treeData?: Prisma.JsonNullableWithAggregatesFilter<"RepositorySnapshot">;
    truncatedByGitHub?: Prisma.BoolWithAggregatesFilter<"RepositorySnapshot"> | boolean;
    limitedByDevScope?: Prisma.BoolWithAggregatesFilter<"RepositorySnapshot"> | boolean;
    maximumReturnedItems?: Prisma.IntWithAggregatesFilter<"RepositorySnapshot"> | number;
    itemsAnalyzed?: Prisma.IntWithAggregatesFilter<"RepositorySnapshot"> | number;
    analysisStartedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RepositorySnapshot"> | Date | string | null;
    analysisCompletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RepositorySnapshot"> | Date | string | null;
    failureReason?: Prisma.StringNullableWithAggregatesFilter<"RepositorySnapshot"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RepositorySnapshot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RepositorySnapshot"> | Date | string;
};
export type RepositorySnapshotCreateInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    repository: Prisma.RepositoryCreateNestedOneWithoutSnapshotsInput;
    languages?: Prisma.LanguageStatisticCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUncheckedCreateInput = {
    id?: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    languages?: Prisma.LanguageStatisticUncheckedCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionUncheckedCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationUncheckedCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repository?: Prisma.RepositoryUpdateOneRequiredWithoutSnapshotsNestedInput;
    languages?: Prisma.LanguageStatisticUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    languages?: Prisma.LanguageStatisticUncheckedUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUncheckedUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUncheckedUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotCreateManyInput = {
    id?: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RepositorySnapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositorySnapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositorySnapshotListRelationFilter = {
    every?: Prisma.RepositorySnapshotWhereInput;
    some?: Prisma.RepositorySnapshotWhereInput;
    none?: Prisma.RepositorySnapshotWhereInput;
};
export type RepositorySnapshotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RepositorySnapshotRepositoryIdCommitShaCompoundUniqueInput = {
    repositoryId: string;
    commitSha: string;
};
export type RepositorySnapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    commitSha?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    treeData?: Prisma.SortOrder;
    truncatedByGitHub?: Prisma.SortOrder;
    limitedByDevScope?: Prisma.SortOrder;
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
    analysisStartedAt?: Prisma.SortOrder;
    analysisCompletedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositorySnapshotAvgOrderByAggregateInput = {
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
};
export type RepositorySnapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    commitSha?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    truncatedByGitHub?: Prisma.SortOrder;
    limitedByDevScope?: Prisma.SortOrder;
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
    analysisStartedAt?: Prisma.SortOrder;
    analysisCompletedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositorySnapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    commitSha?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    truncatedByGitHub?: Prisma.SortOrder;
    limitedByDevScope?: Prisma.SortOrder;
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
    analysisStartedAt?: Prisma.SortOrder;
    analysisCompletedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositorySnapshotSumOrderByAggregateInput = {
    maximumReturnedItems?: Prisma.SortOrder;
    itemsAnalyzed?: Prisma.SortOrder;
};
export type RepositorySnapshotScalarRelationFilter = {
    is?: Prisma.RepositorySnapshotWhereInput;
    isNot?: Prisma.RepositorySnapshotWhereInput;
};
export type RepositorySnapshotCreateNestedManyWithoutRepositoryInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput> | Prisma.RepositorySnapshotCreateWithoutRepositoryInput[] | Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput | Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput[];
    createMany?: Prisma.RepositorySnapshotCreateManyRepositoryInputEnvelope;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
};
export type RepositorySnapshotUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput> | Prisma.RepositorySnapshotCreateWithoutRepositoryInput[] | Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput | Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput[];
    createMany?: Prisma.RepositorySnapshotCreateManyRepositoryInputEnvelope;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
};
export type RepositorySnapshotUpdateManyWithoutRepositoryNestedInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput> | Prisma.RepositorySnapshotCreateWithoutRepositoryInput[] | Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput | Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput[];
    upsert?: Prisma.RepositorySnapshotUpsertWithWhereUniqueWithoutRepositoryInput | Prisma.RepositorySnapshotUpsertWithWhereUniqueWithoutRepositoryInput[];
    createMany?: Prisma.RepositorySnapshotCreateManyRepositoryInputEnvelope;
    set?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    disconnect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    delete?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    connect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    update?: Prisma.RepositorySnapshotUpdateWithWhereUniqueWithoutRepositoryInput | Prisma.RepositorySnapshotUpdateWithWhereUniqueWithoutRepositoryInput[];
    updateMany?: Prisma.RepositorySnapshotUpdateManyWithWhereWithoutRepositoryInput | Prisma.RepositorySnapshotUpdateManyWithWhereWithoutRepositoryInput[];
    deleteMany?: Prisma.RepositorySnapshotScalarWhereInput | Prisma.RepositorySnapshotScalarWhereInput[];
};
export type RepositorySnapshotUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput> | Prisma.RepositorySnapshotCreateWithoutRepositoryInput[] | Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput | Prisma.RepositorySnapshotCreateOrConnectWithoutRepositoryInput[];
    upsert?: Prisma.RepositorySnapshotUpsertWithWhereUniqueWithoutRepositoryInput | Prisma.RepositorySnapshotUpsertWithWhereUniqueWithoutRepositoryInput[];
    createMany?: Prisma.RepositorySnapshotCreateManyRepositoryInputEnvelope;
    set?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    disconnect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    delete?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    connect?: Prisma.RepositorySnapshotWhereUniqueInput | Prisma.RepositorySnapshotWhereUniqueInput[];
    update?: Prisma.RepositorySnapshotUpdateWithWhereUniqueWithoutRepositoryInput | Prisma.RepositorySnapshotUpdateWithWhereUniqueWithoutRepositoryInput[];
    updateMany?: Prisma.RepositorySnapshotUpdateManyWithWhereWithoutRepositoryInput | Prisma.RepositorySnapshotUpdateManyWithWhereWithoutRepositoryInput[];
    deleteMany?: Prisma.RepositorySnapshotScalarWhereInput | Prisma.RepositorySnapshotScalarWhereInput[];
};
export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus;
};
export type RepositorySnapshotCreateNestedOneWithoutLanguagesInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutLanguagesInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutLanguagesInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutLanguagesInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutLanguagesInput;
    upsert?: Prisma.RepositorySnapshotUpsertWithoutLanguagesInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepositorySnapshotUpdateToOneWithWhereWithoutLanguagesInput, Prisma.RepositorySnapshotUpdateWithoutLanguagesInput>, Prisma.RepositorySnapshotUncheckedUpdateWithoutLanguagesInput>;
};
export type RepositorySnapshotCreateNestedOneWithoutTechnologiesInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutTechnologiesInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutTechnologiesInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutTechnologiesInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutTechnologiesInput;
    upsert?: Prisma.RepositorySnapshotUpsertWithoutTechnologiesInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepositorySnapshotUpdateToOneWithWhereWithoutTechnologiesInput, Prisma.RepositorySnapshotUpdateWithoutTechnologiesInput>, Prisma.RepositorySnapshotUncheckedUpdateWithoutTechnologiesInput>;
};
export type RepositorySnapshotCreateNestedOneWithoutExplanationsInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedCreateWithoutExplanationsInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutExplanationsInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotUpdateOneRequiredWithoutExplanationsNestedInput = {
    create?: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedCreateWithoutExplanationsInput>;
    connectOrCreate?: Prisma.RepositorySnapshotCreateOrConnectWithoutExplanationsInput;
    upsert?: Prisma.RepositorySnapshotUpsertWithoutExplanationsInput;
    connect?: Prisma.RepositorySnapshotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepositorySnapshotUpdateToOneWithWhereWithoutExplanationsInput, Prisma.RepositorySnapshotUpdateWithoutExplanationsInput>, Prisma.RepositorySnapshotUncheckedUpdateWithoutExplanationsInput>;
};
export type RepositorySnapshotCreateWithoutRepositoryInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    languages?: Prisma.LanguageStatisticCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUncheckedCreateWithoutRepositoryInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    languages?: Prisma.LanguageStatisticUncheckedCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionUncheckedCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationUncheckedCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotCreateOrConnectWithoutRepositoryInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput>;
};
export type RepositorySnapshotCreateManyRepositoryInputEnvelope = {
    data: Prisma.RepositorySnapshotCreateManyRepositoryInput | Prisma.RepositorySnapshotCreateManyRepositoryInput[];
    skipDuplicates?: boolean;
};
export type RepositorySnapshotUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    update: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutRepositoryInput>;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedCreateWithoutRepositoryInput>;
};
export type RepositorySnapshotUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutRepositoryInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutRepositoryInput>;
};
export type RepositorySnapshotUpdateManyWithWhereWithoutRepositoryInput = {
    where: Prisma.RepositorySnapshotScalarWhereInput;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateManyMutationInput, Prisma.RepositorySnapshotUncheckedUpdateManyWithoutRepositoryInput>;
};
export type RepositorySnapshotScalarWhereInput = {
    AND?: Prisma.RepositorySnapshotScalarWhereInput | Prisma.RepositorySnapshotScalarWhereInput[];
    OR?: Prisma.RepositorySnapshotScalarWhereInput[];
    NOT?: Prisma.RepositorySnapshotScalarWhereInput | Prisma.RepositorySnapshotScalarWhereInput[];
    id?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    repositoryId?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    commitSha?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    branch?: Prisma.StringFilter<"RepositorySnapshot"> | string;
    status?: Prisma.EnumAnalysisStatusFilter<"RepositorySnapshot"> | $Enums.AnalysisStatus;
    treeData?: Prisma.JsonNullableFilter<"RepositorySnapshot">;
    truncatedByGitHub?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    limitedByDevScope?: Prisma.BoolFilter<"RepositorySnapshot"> | boolean;
    maximumReturnedItems?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    itemsAnalyzed?: Prisma.IntFilter<"RepositorySnapshot"> | number;
    analysisStartedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    analysisCompletedAt?: Prisma.DateTimeNullableFilter<"RepositorySnapshot"> | Date | string | null;
    failureReason?: Prisma.StringNullableFilter<"RepositorySnapshot"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RepositorySnapshot"> | Date | string;
};
export type RepositorySnapshotCreateWithoutLanguagesInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    repository: Prisma.RepositoryCreateNestedOneWithoutSnapshotsInput;
    technologies?: Prisma.TechnologyDetectionCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUncheckedCreateWithoutLanguagesInput = {
    id?: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    technologies?: Prisma.TechnologyDetectionUncheckedCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationUncheckedCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotCreateOrConnectWithoutLanguagesInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutLanguagesInput>;
};
export type RepositorySnapshotUpsertWithoutLanguagesInput = {
    update: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutLanguagesInput>;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutLanguagesInput>;
    where?: Prisma.RepositorySnapshotWhereInput;
};
export type RepositorySnapshotUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: Prisma.RepositorySnapshotWhereInput;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutLanguagesInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutLanguagesInput>;
};
export type RepositorySnapshotUpdateWithoutLanguagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repository?: Prisma.RepositoryUpdateOneRequiredWithoutSnapshotsNestedInput;
    technologies?: Prisma.TechnologyDetectionUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateWithoutLanguagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    technologies?: Prisma.TechnologyDetectionUncheckedUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUncheckedUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotCreateWithoutTechnologiesInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    repository: Prisma.RepositoryCreateNestedOneWithoutSnapshotsInput;
    languages?: Prisma.LanguageStatisticCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUncheckedCreateWithoutTechnologiesInput = {
    id?: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    languages?: Prisma.LanguageStatisticUncheckedCreateNestedManyWithoutSnapshotInput;
    explanations?: Prisma.AiExplanationUncheckedCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotCreateOrConnectWithoutTechnologiesInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutTechnologiesInput>;
};
export type RepositorySnapshotUpsertWithoutTechnologiesInput = {
    update: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutTechnologiesInput>;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedCreateWithoutTechnologiesInput>;
    where?: Prisma.RepositorySnapshotWhereInput;
};
export type RepositorySnapshotUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: Prisma.RepositorySnapshotWhereInput;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutTechnologiesInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutTechnologiesInput>;
};
export type RepositorySnapshotUpdateWithoutTechnologiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repository?: Prisma.RepositoryUpdateOneRequiredWithoutSnapshotsNestedInput;
    languages?: Prisma.LanguageStatisticUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateWithoutTechnologiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    languages?: Prisma.LanguageStatisticUncheckedUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUncheckedUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotCreateWithoutExplanationsInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    repository: Prisma.RepositoryCreateNestedOneWithoutSnapshotsInput;
    languages?: Prisma.LanguageStatisticCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotUncheckedCreateWithoutExplanationsInput = {
    id?: string;
    repositoryId: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    languages?: Prisma.LanguageStatisticUncheckedCreateNestedManyWithoutSnapshotInput;
    technologies?: Prisma.TechnologyDetectionUncheckedCreateNestedManyWithoutSnapshotInput;
};
export type RepositorySnapshotCreateOrConnectWithoutExplanationsInput = {
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedCreateWithoutExplanationsInput>;
};
export type RepositorySnapshotUpsertWithoutExplanationsInput = {
    update: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutExplanationsInput>;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedCreateWithoutExplanationsInput>;
    where?: Prisma.RepositorySnapshotWhereInput;
};
export type RepositorySnapshotUpdateToOneWithWhereWithoutExplanationsInput = {
    where?: Prisma.RepositorySnapshotWhereInput;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateWithoutExplanationsInput, Prisma.RepositorySnapshotUncheckedUpdateWithoutExplanationsInput>;
};
export type RepositorySnapshotUpdateWithoutExplanationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repository?: Prisma.RepositoryUpdateOneRequiredWithoutSnapshotsNestedInput;
    languages?: Prisma.LanguageStatisticUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateWithoutExplanationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    languages?: Prisma.LanguageStatisticUncheckedUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUncheckedUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotCreateManyRepositoryInput = {
    id?: string;
    commitSha: string;
    branch: string;
    status?: $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: number;
    itemsAnalyzed?: number;
    analysisStartedAt?: Date | string | null;
    analysisCompletedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RepositorySnapshotUpdateWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    languages?: Prisma.LanguageStatisticUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    languages?: Prisma.LanguageStatisticUncheckedUpdateManyWithoutSnapshotNestedInput;
    technologies?: Prisma.TechnologyDetectionUncheckedUpdateManyWithoutSnapshotNestedInput;
    explanations?: Prisma.AiExplanationUncheckedUpdateManyWithoutSnapshotNestedInput;
};
export type RepositorySnapshotUncheckedUpdateManyWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commitSha?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus;
    treeData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    truncatedByGitHub?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    limitedByDevScope?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maximumReturnedItems?: Prisma.IntFieldUpdateOperationsInput | number;
    itemsAnalyzed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysisStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    analysisCompletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositorySnapshotCountOutputType = {
    languages: number;
    technologies: number;
    explanations: number;
};
export type RepositorySnapshotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    languages?: boolean | RepositorySnapshotCountOutputTypeCountLanguagesArgs;
    technologies?: boolean | RepositorySnapshotCountOutputTypeCountTechnologiesArgs;
    explanations?: boolean | RepositorySnapshotCountOutputTypeCountExplanationsArgs;
};
export type RepositorySnapshotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotCountOutputTypeSelect<ExtArgs> | null;
};
export type RepositorySnapshotCountOutputTypeCountLanguagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageStatisticWhereInput;
};
export type RepositorySnapshotCountOutputTypeCountTechnologiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnologyDetectionWhereInput;
};
export type RepositorySnapshotCountOutputTypeCountExplanationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiExplanationWhereInput;
};
export type RepositorySnapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    commitSha?: boolean;
    branch?: boolean;
    status?: boolean;
    treeData?: boolean;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: boolean;
    itemsAnalyzed?: boolean;
    analysisStartedAt?: boolean;
    analysisCompletedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
    languages?: boolean | Prisma.RepositorySnapshot$languagesArgs<ExtArgs>;
    technologies?: boolean | Prisma.RepositorySnapshot$technologiesArgs<ExtArgs>;
    explanations?: boolean | Prisma.RepositorySnapshot$explanationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RepositorySnapshotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositorySnapshot"]>;
export type RepositorySnapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    commitSha?: boolean;
    branch?: boolean;
    status?: boolean;
    treeData?: boolean;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: boolean;
    itemsAnalyzed?: boolean;
    analysisStartedAt?: boolean;
    analysisCompletedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositorySnapshot"]>;
export type RepositorySnapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    commitSha?: boolean;
    branch?: boolean;
    status?: boolean;
    treeData?: boolean;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: boolean;
    itemsAnalyzed?: boolean;
    analysisStartedAt?: boolean;
    analysisCompletedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositorySnapshot"]>;
export type RepositorySnapshotSelectScalar = {
    id?: boolean;
    repositoryId?: boolean;
    commitSha?: boolean;
    branch?: boolean;
    status?: boolean;
    treeData?: boolean;
    truncatedByGitHub?: boolean;
    limitedByDevScope?: boolean;
    maximumReturnedItems?: boolean;
    itemsAnalyzed?: boolean;
    analysisStartedAt?: boolean;
    analysisCompletedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RepositorySnapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "repositoryId" | "commitSha" | "branch" | "status" | "treeData" | "truncatedByGitHub" | "limitedByDevScope" | "maximumReturnedItems" | "itemsAnalyzed" | "analysisStartedAt" | "analysisCompletedAt" | "failureReason" | "createdAt" | "updatedAt", ExtArgs["result"]["repositorySnapshot"]>;
export type RepositorySnapshotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
    languages?: boolean | Prisma.RepositorySnapshot$languagesArgs<ExtArgs>;
    technologies?: boolean | Prisma.RepositorySnapshot$technologiesArgs<ExtArgs>;
    explanations?: boolean | Prisma.RepositorySnapshot$explanationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RepositorySnapshotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RepositorySnapshotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
};
export type RepositorySnapshotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
};
export type $RepositorySnapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RepositorySnapshot";
    objects: {
        repository: Prisma.$RepositoryPayload<ExtArgs>;
        languages: Prisma.$LanguageStatisticPayload<ExtArgs>[];
        technologies: Prisma.$TechnologyDetectionPayload<ExtArgs>[];
        explanations: Prisma.$AiExplanationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        repositoryId: string;
        commitSha: string;
        branch: string;
        status: $Enums.AnalysisStatus;
        treeData: runtime.JsonValue | null;
        truncatedByGitHub: boolean;
        limitedByDevScope: boolean;
        maximumReturnedItems: number;
        itemsAnalyzed: number;
        analysisStartedAt: Date | null;
        analysisCompletedAt: Date | null;
        failureReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["repositorySnapshot"]>;
    composites: {};
};
export type RepositorySnapshotGetPayload<S extends boolean | null | undefined | RepositorySnapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload, S>;
export type RepositorySnapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RepositorySnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RepositorySnapshotCountAggregateInputType | true;
};
export interface RepositorySnapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RepositorySnapshot'];
        meta: {
            name: 'RepositorySnapshot';
        };
    };
    findUnique<T extends RepositorySnapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RepositorySnapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RepositorySnapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RepositorySnapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RepositorySnapshotFindManyArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RepositorySnapshotCreateArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotCreateArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RepositorySnapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RepositorySnapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RepositorySnapshotDeleteArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RepositorySnapshotUpdateArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RepositorySnapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, RepositorySnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RepositorySnapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RepositorySnapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RepositorySnapshotUpsertArgs>(args: Prisma.SelectSubset<T, RepositorySnapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RepositorySnapshotCountArgs>(args?: Prisma.Subset<T, RepositorySnapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RepositorySnapshotCountAggregateOutputType> : number>;
    aggregate<T extends RepositorySnapshotAggregateArgs>(args: Prisma.Subset<T, RepositorySnapshotAggregateArgs>): Prisma.PrismaPromise<GetRepositorySnapshotAggregateType<T>>;
    groupBy<T extends RepositorySnapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RepositorySnapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: RepositorySnapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RepositorySnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositorySnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RepositorySnapshotFieldRefs;
}
export interface Prisma__RepositorySnapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    repository<T extends Prisma.RepositoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositoryDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    languages<T extends Prisma.RepositorySnapshot$languagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshot$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LanguageStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    technologies<T extends Prisma.RepositorySnapshot$technologiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshot$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnologyDetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    explanations<T extends Prisma.RepositorySnapshot$explanationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshot$explanationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RepositorySnapshotFieldRefs {
    readonly id: Prisma.FieldRef<"RepositorySnapshot", 'String'>;
    readonly repositoryId: Prisma.FieldRef<"RepositorySnapshot", 'String'>;
    readonly commitSha: Prisma.FieldRef<"RepositorySnapshot", 'String'>;
    readonly branch: Prisma.FieldRef<"RepositorySnapshot", 'String'>;
    readonly status: Prisma.FieldRef<"RepositorySnapshot", 'AnalysisStatus'>;
    readonly treeData: Prisma.FieldRef<"RepositorySnapshot", 'Json'>;
    readonly truncatedByGitHub: Prisma.FieldRef<"RepositorySnapshot", 'Boolean'>;
    readonly limitedByDevScope: Prisma.FieldRef<"RepositorySnapshot", 'Boolean'>;
    readonly maximumReturnedItems: Prisma.FieldRef<"RepositorySnapshot", 'Int'>;
    readonly itemsAnalyzed: Prisma.FieldRef<"RepositorySnapshot", 'Int'>;
    readonly analysisStartedAt: Prisma.FieldRef<"RepositorySnapshot", 'DateTime'>;
    readonly analysisCompletedAt: Prisma.FieldRef<"RepositorySnapshot", 'DateTime'>;
    readonly failureReason: Prisma.FieldRef<"RepositorySnapshot", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RepositorySnapshot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RepositorySnapshot", 'DateTime'>;
}
export type RepositorySnapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where?: Prisma.RepositorySnapshotWhereInput;
    orderBy?: Prisma.RepositorySnapshotOrderByWithRelationInput | Prisma.RepositorySnapshotOrderByWithRelationInput[];
    cursor?: Prisma.RepositorySnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositorySnapshotScalarFieldEnum | Prisma.RepositorySnapshotScalarFieldEnum[];
};
export type RepositorySnapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where?: Prisma.RepositorySnapshotWhereInput;
    orderBy?: Prisma.RepositorySnapshotOrderByWithRelationInput | Prisma.RepositorySnapshotOrderByWithRelationInput[];
    cursor?: Prisma.RepositorySnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositorySnapshotScalarFieldEnum | Prisma.RepositorySnapshotScalarFieldEnum[];
};
export type RepositorySnapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where?: Prisma.RepositorySnapshotWhereInput;
    orderBy?: Prisma.RepositorySnapshotOrderByWithRelationInput | Prisma.RepositorySnapshotOrderByWithRelationInput[];
    cursor?: Prisma.RepositorySnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositorySnapshotScalarFieldEnum | Prisma.RepositorySnapshotScalarFieldEnum[];
};
export type RepositorySnapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositorySnapshotCreateInput, Prisma.RepositorySnapshotUncheckedCreateInput>;
};
export type RepositorySnapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RepositorySnapshotCreateManyInput | Prisma.RepositorySnapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepositorySnapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    data: Prisma.RepositorySnapshotCreateManyInput | Prisma.RepositorySnapshotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RepositorySnapshotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RepositorySnapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateInput, Prisma.RepositorySnapshotUncheckedUpdateInput>;
    where: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateManyMutationInput, Prisma.RepositorySnapshotUncheckedUpdateManyInput>;
    where?: Prisma.RepositorySnapshotWhereInput;
    limit?: number;
};
export type RepositorySnapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositorySnapshotUpdateManyMutationInput, Prisma.RepositorySnapshotUncheckedUpdateManyInput>;
    where?: Prisma.RepositorySnapshotWhereInput;
    limit?: number;
    include?: Prisma.RepositorySnapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RepositorySnapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where: Prisma.RepositorySnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositorySnapshotCreateInput, Prisma.RepositorySnapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RepositorySnapshotUpdateInput, Prisma.RepositorySnapshotUncheckedUpdateInput>;
};
export type RepositorySnapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
    where: Prisma.RepositorySnapshotWhereUniqueInput;
};
export type RepositorySnapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositorySnapshotWhereInput;
    limit?: number;
};
export type RepositorySnapshot$languagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RepositorySnapshot$technologiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RepositorySnapshot$explanationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    where?: Prisma.AiExplanationWhereInput;
    orderBy?: Prisma.AiExplanationOrderByWithRelationInput | Prisma.AiExplanationOrderByWithRelationInput[];
    cursor?: Prisma.AiExplanationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiExplanationScalarFieldEnum | Prisma.AiExplanationScalarFieldEnum[];
};
export type RepositorySnapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySnapshotSelect<ExtArgs> | null;
    omit?: Prisma.RepositorySnapshotOmit<ExtArgs> | null;
    include?: Prisma.RepositorySnapshotInclude<ExtArgs> | null;
};
