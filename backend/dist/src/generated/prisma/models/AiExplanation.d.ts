import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AiExplanationModel = runtime.Types.Result.DefaultSelection<Prisma.$AiExplanationPayload>;
export type AggregateAiExplanation = {
    _count: AiExplanationCountAggregateOutputType | null;
    _min: AiExplanationMinAggregateOutputType | null;
    _max: AiExplanationMaxAggregateOutputType | null;
};
export type AiExplanationMinAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    model: string | null;
    purpose: string | null;
    howItWorks: string | null;
    difficultyLevel: string | null;
    difficultyReason: string | null;
    generatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AiExplanationMaxAggregateOutputType = {
    id: string | null;
    snapshotId: string | null;
    model: string | null;
    purpose: string | null;
    howItWorks: string | null;
    difficultyLevel: string | null;
    difficultyReason: string | null;
    generatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AiExplanationCountAggregateOutputType = {
    id: number;
    snapshotId: number;
    model: number;
    purpose: number;
    howItWorks: number;
    architecture: number;
    gettingStarted: number;
    skills: number;
    difficultyLevel: number;
    difficultyReason: number;
    keyTakeaways: number;
    generatedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AiExplanationMinAggregateInputType = {
    id?: true;
    snapshotId?: true;
    model?: true;
    purpose?: true;
    howItWorks?: true;
    difficultyLevel?: true;
    difficultyReason?: true;
    generatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AiExplanationMaxAggregateInputType = {
    id?: true;
    snapshotId?: true;
    model?: true;
    purpose?: true;
    howItWorks?: true;
    difficultyLevel?: true;
    difficultyReason?: true;
    generatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AiExplanationCountAggregateInputType = {
    id?: true;
    snapshotId?: true;
    model?: true;
    purpose?: true;
    howItWorks?: true;
    architecture?: true;
    gettingStarted?: true;
    skills?: true;
    difficultyLevel?: true;
    difficultyReason?: true;
    keyTakeaways?: true;
    generatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AiExplanationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiExplanationWhereInput;
    orderBy?: Prisma.AiExplanationOrderByWithRelationInput | Prisma.AiExplanationOrderByWithRelationInput[];
    cursor?: Prisma.AiExplanationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiExplanationCountAggregateInputType;
    _min?: AiExplanationMinAggregateInputType;
    _max?: AiExplanationMaxAggregateInputType;
};
export type GetAiExplanationAggregateType<T extends AiExplanationAggregateArgs> = {
    [P in keyof T & keyof AggregateAiExplanation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiExplanation[P]> : Prisma.GetScalarType<T[P], AggregateAiExplanation[P]>;
};
export type AiExplanationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiExplanationWhereInput;
    orderBy?: Prisma.AiExplanationOrderByWithAggregationInput | Prisma.AiExplanationOrderByWithAggregationInput[];
    by: Prisma.AiExplanationScalarFieldEnum[] | Prisma.AiExplanationScalarFieldEnum;
    having?: Prisma.AiExplanationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiExplanationCountAggregateInputType | true;
    _min?: AiExplanationMinAggregateInputType;
    _max?: AiExplanationMaxAggregateInputType;
};
export type AiExplanationGroupByOutputType = {
    id: string;
    snapshotId: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: runtime.JsonValue;
    gettingStarted: runtime.JsonValue;
    skills: string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways: string[];
    generatedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: AiExplanationCountAggregateOutputType | null;
    _min: AiExplanationMinAggregateOutputType | null;
    _max: AiExplanationMaxAggregateOutputType | null;
};
export type GetAiExplanationGroupByPayload<T extends AiExplanationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiExplanationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiExplanationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiExplanationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiExplanationGroupByOutputType[P]>;
}>>;
export type AiExplanationWhereInput = {
    AND?: Prisma.AiExplanationWhereInput | Prisma.AiExplanationWhereInput[];
    OR?: Prisma.AiExplanationWhereInput[];
    NOT?: Prisma.AiExplanationWhereInput | Prisma.AiExplanationWhereInput[];
    id?: Prisma.StringFilter<"AiExplanation"> | string;
    snapshotId?: Prisma.StringFilter<"AiExplanation"> | string;
    model?: Prisma.StringFilter<"AiExplanation"> | string;
    purpose?: Prisma.StringFilter<"AiExplanation"> | string;
    howItWorks?: Prisma.StringFilter<"AiExplanation"> | string;
    architecture?: Prisma.JsonFilter<"AiExplanation">;
    gettingStarted?: Prisma.JsonFilter<"AiExplanation">;
    skills?: Prisma.StringNullableListFilter<"AiExplanation">;
    difficultyLevel?: Prisma.StringFilter<"AiExplanation"> | string;
    difficultyReason?: Prisma.StringFilter<"AiExplanation"> | string;
    keyTakeaways?: Prisma.StringNullableListFilter<"AiExplanation">;
    generatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
};
export type AiExplanationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    howItWorks?: Prisma.SortOrder;
    architecture?: Prisma.SortOrder;
    gettingStarted?: Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    difficultyLevel?: Prisma.SortOrder;
    difficultyReason?: Prisma.SortOrder;
    keyTakeaways?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    snapshot?: Prisma.RepositorySnapshotOrderByWithRelationInput;
};
export type AiExplanationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    snapshotId_model?: Prisma.AiExplanationSnapshotIdModelCompoundUniqueInput;
    AND?: Prisma.AiExplanationWhereInput | Prisma.AiExplanationWhereInput[];
    OR?: Prisma.AiExplanationWhereInput[];
    NOT?: Prisma.AiExplanationWhereInput | Prisma.AiExplanationWhereInput[];
    snapshotId?: Prisma.StringFilter<"AiExplanation"> | string;
    model?: Prisma.StringFilter<"AiExplanation"> | string;
    purpose?: Prisma.StringFilter<"AiExplanation"> | string;
    howItWorks?: Prisma.StringFilter<"AiExplanation"> | string;
    architecture?: Prisma.JsonFilter<"AiExplanation">;
    gettingStarted?: Prisma.JsonFilter<"AiExplanation">;
    skills?: Prisma.StringNullableListFilter<"AiExplanation">;
    difficultyLevel?: Prisma.StringFilter<"AiExplanation"> | string;
    difficultyReason?: Prisma.StringFilter<"AiExplanation"> | string;
    keyTakeaways?: Prisma.StringNullableListFilter<"AiExplanation">;
    generatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    snapshot?: Prisma.XOR<Prisma.RepositorySnapshotScalarRelationFilter, Prisma.RepositorySnapshotWhereInput>;
}, "id" | "snapshotId_model">;
export type AiExplanationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    howItWorks?: Prisma.SortOrder;
    architecture?: Prisma.SortOrder;
    gettingStarted?: Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    difficultyLevel?: Prisma.SortOrder;
    difficultyReason?: Prisma.SortOrder;
    keyTakeaways?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AiExplanationCountOrderByAggregateInput;
    _max?: Prisma.AiExplanationMaxOrderByAggregateInput;
    _min?: Prisma.AiExplanationMinOrderByAggregateInput;
};
export type AiExplanationScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiExplanationScalarWhereWithAggregatesInput | Prisma.AiExplanationScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiExplanationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiExplanationScalarWhereWithAggregatesInput | Prisma.AiExplanationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    snapshotId?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    model?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    purpose?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    howItWorks?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    architecture?: Prisma.JsonWithAggregatesFilter<"AiExplanation">;
    gettingStarted?: Prisma.JsonWithAggregatesFilter<"AiExplanation">;
    skills?: Prisma.StringNullableListFilter<"AiExplanation">;
    difficultyLevel?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    difficultyReason?: Prisma.StringWithAggregatesFilter<"AiExplanation"> | string;
    keyTakeaways?: Prisma.StringNullableListFilter<"AiExplanation">;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"AiExplanation"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiExplanation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AiExplanation"> | Date | string;
};
export type AiExplanationCreateInput = {
    id?: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    snapshot: Prisma.RepositorySnapshotCreateNestedOneWithoutExplanationsInput;
};
export type AiExplanationUncheckedCreateInput = {
    id?: string;
    snapshotId: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AiExplanationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshot?: Prisma.RepositorySnapshotUpdateOneRequiredWithoutExplanationsNestedInput;
};
export type AiExplanationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationCreateManyInput = {
    id?: string;
    snapshotId: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AiExplanationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshotId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationListRelationFilter = {
    every?: Prisma.AiExplanationWhereInput;
    some?: Prisma.AiExplanationWhereInput;
    none?: Prisma.AiExplanationWhereInput;
};
export type AiExplanationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiExplanationSnapshotIdModelCompoundUniqueInput = {
    snapshotId: string;
    model: string;
};
export type AiExplanationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    howItWorks?: Prisma.SortOrder;
    architecture?: Prisma.SortOrder;
    gettingStarted?: Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    difficultyLevel?: Prisma.SortOrder;
    difficultyReason?: Prisma.SortOrder;
    keyTakeaways?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiExplanationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    howItWorks?: Prisma.SortOrder;
    difficultyLevel?: Prisma.SortOrder;
    difficultyReason?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiExplanationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshotId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    howItWorks?: Prisma.SortOrder;
    difficultyLevel?: Prisma.SortOrder;
    difficultyReason?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiExplanationCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput> | Prisma.AiExplanationCreateWithoutSnapshotInput[] | Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput | Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.AiExplanationCreateManySnapshotInputEnvelope;
    connect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
};
export type AiExplanationUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput> | Prisma.AiExplanationCreateWithoutSnapshotInput[] | Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput | Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput[];
    createMany?: Prisma.AiExplanationCreateManySnapshotInputEnvelope;
    connect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
};
export type AiExplanationUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput> | Prisma.AiExplanationCreateWithoutSnapshotInput[] | Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput | Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.AiExplanationUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.AiExplanationUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.AiExplanationCreateManySnapshotInputEnvelope;
    set?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    disconnect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    delete?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    connect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    update?: Prisma.AiExplanationUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.AiExplanationUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.AiExplanationUpdateManyWithWhereWithoutSnapshotInput | Prisma.AiExplanationUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.AiExplanationScalarWhereInput | Prisma.AiExplanationScalarWhereInput[];
};
export type AiExplanationUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput> | Prisma.AiExplanationCreateWithoutSnapshotInput[] | Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput[];
    connectOrCreate?: Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput | Prisma.AiExplanationCreateOrConnectWithoutSnapshotInput[];
    upsert?: Prisma.AiExplanationUpsertWithWhereUniqueWithoutSnapshotInput | Prisma.AiExplanationUpsertWithWhereUniqueWithoutSnapshotInput[];
    createMany?: Prisma.AiExplanationCreateManySnapshotInputEnvelope;
    set?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    disconnect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    delete?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    connect?: Prisma.AiExplanationWhereUniqueInput | Prisma.AiExplanationWhereUniqueInput[];
    update?: Prisma.AiExplanationUpdateWithWhereUniqueWithoutSnapshotInput | Prisma.AiExplanationUpdateWithWhereUniqueWithoutSnapshotInput[];
    updateMany?: Prisma.AiExplanationUpdateManyWithWhereWithoutSnapshotInput | Prisma.AiExplanationUpdateManyWithWhereWithoutSnapshotInput[];
    deleteMany?: Prisma.AiExplanationScalarWhereInput | Prisma.AiExplanationScalarWhereInput[];
};
export type AiExplanationCreateskillsInput = {
    set: string[];
};
export type AiExplanationCreatekeyTakeawaysInput = {
    set: string[];
};
export type AiExplanationUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
};
export type AiExplanationUpdatekeyTakeawaysInput = {
    set?: string[];
    push?: string | string[];
};
export type AiExplanationCreateWithoutSnapshotInput = {
    id?: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AiExplanationUncheckedCreateWithoutSnapshotInput = {
    id?: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AiExplanationCreateOrConnectWithoutSnapshotInput = {
    where: Prisma.AiExplanationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput>;
};
export type AiExplanationCreateManySnapshotInputEnvelope = {
    data: Prisma.AiExplanationCreateManySnapshotInput | Prisma.AiExplanationCreateManySnapshotInput[];
    skipDuplicates?: boolean;
};
export type AiExplanationUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.AiExplanationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiExplanationUpdateWithoutSnapshotInput, Prisma.AiExplanationUncheckedUpdateWithoutSnapshotInput>;
    create: Prisma.XOR<Prisma.AiExplanationCreateWithoutSnapshotInput, Prisma.AiExplanationUncheckedCreateWithoutSnapshotInput>;
};
export type AiExplanationUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: Prisma.AiExplanationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiExplanationUpdateWithoutSnapshotInput, Prisma.AiExplanationUncheckedUpdateWithoutSnapshotInput>;
};
export type AiExplanationUpdateManyWithWhereWithoutSnapshotInput = {
    where: Prisma.AiExplanationScalarWhereInput;
    data: Prisma.XOR<Prisma.AiExplanationUpdateManyMutationInput, Prisma.AiExplanationUncheckedUpdateManyWithoutSnapshotInput>;
};
export type AiExplanationScalarWhereInput = {
    AND?: Prisma.AiExplanationScalarWhereInput | Prisma.AiExplanationScalarWhereInput[];
    OR?: Prisma.AiExplanationScalarWhereInput[];
    NOT?: Prisma.AiExplanationScalarWhereInput | Prisma.AiExplanationScalarWhereInput[];
    id?: Prisma.StringFilter<"AiExplanation"> | string;
    snapshotId?: Prisma.StringFilter<"AiExplanation"> | string;
    model?: Prisma.StringFilter<"AiExplanation"> | string;
    purpose?: Prisma.StringFilter<"AiExplanation"> | string;
    howItWorks?: Prisma.StringFilter<"AiExplanation"> | string;
    architecture?: Prisma.JsonFilter<"AiExplanation">;
    gettingStarted?: Prisma.JsonFilter<"AiExplanation">;
    skills?: Prisma.StringNullableListFilter<"AiExplanation">;
    difficultyLevel?: Prisma.StringFilter<"AiExplanation"> | string;
    difficultyReason?: Prisma.StringFilter<"AiExplanation"> | string;
    keyTakeaways?: Prisma.StringNullableListFilter<"AiExplanation">;
    generatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AiExplanation"> | Date | string;
};
export type AiExplanationCreateManySnapshotInput = {
    id?: string;
    model: string;
    purpose: string;
    howItWorks: string;
    architecture: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationCreateskillsInput | string[];
    difficultyLevel: string;
    difficultyReason: string;
    keyTakeaways?: Prisma.AiExplanationCreatekeyTakeawaysInput | string[];
    generatedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AiExplanationUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationUncheckedUpdateWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationUncheckedUpdateManyWithoutSnapshotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    howItWorks?: Prisma.StringFieldUpdateOperationsInput | string;
    architecture?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    gettingStarted?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    skills?: Prisma.AiExplanationUpdateskillsInput | string[];
    difficultyLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyReason?: Prisma.StringFieldUpdateOperationsInput | string;
    keyTakeaways?: Prisma.AiExplanationUpdatekeyTakeawaysInput | string[];
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiExplanationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    model?: boolean;
    purpose?: boolean;
    howItWorks?: boolean;
    architecture?: boolean;
    gettingStarted?: boolean;
    skills?: boolean;
    difficultyLevel?: boolean;
    difficultyReason?: boolean;
    keyTakeaways?: boolean;
    generatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiExplanation"]>;
export type AiExplanationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    model?: boolean;
    purpose?: boolean;
    howItWorks?: boolean;
    architecture?: boolean;
    gettingStarted?: boolean;
    skills?: boolean;
    difficultyLevel?: boolean;
    difficultyReason?: boolean;
    keyTakeaways?: boolean;
    generatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiExplanation"]>;
export type AiExplanationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshotId?: boolean;
    model?: boolean;
    purpose?: boolean;
    howItWorks?: boolean;
    architecture?: boolean;
    gettingStarted?: boolean;
    skills?: boolean;
    difficultyLevel?: boolean;
    difficultyReason?: boolean;
    keyTakeaways?: boolean;
    generatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiExplanation"]>;
export type AiExplanationSelectScalar = {
    id?: boolean;
    snapshotId?: boolean;
    model?: boolean;
    purpose?: boolean;
    howItWorks?: boolean;
    architecture?: boolean;
    gettingStarted?: boolean;
    skills?: boolean;
    difficultyLevel?: boolean;
    difficultyReason?: boolean;
    keyTakeaways?: boolean;
    generatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AiExplanationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "snapshotId" | "model" | "purpose" | "howItWorks" | "architecture" | "gettingStarted" | "skills" | "difficultyLevel" | "difficultyReason" | "keyTakeaways" | "generatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["aiExplanation"]>;
export type AiExplanationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type AiExplanationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type AiExplanationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshot?: boolean | Prisma.RepositorySnapshotDefaultArgs<ExtArgs>;
};
export type $AiExplanationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiExplanation";
    objects: {
        snapshot: Prisma.$RepositorySnapshotPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        snapshotId: string;
        model: string;
        purpose: string;
        howItWorks: string;
        architecture: runtime.JsonValue;
        gettingStarted: runtime.JsonValue;
        skills: string[];
        difficultyLevel: string;
        difficultyReason: string;
        keyTakeaways: string[];
        generatedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["aiExplanation"]>;
    composites: {};
};
export type AiExplanationGetPayload<S extends boolean | null | undefined | AiExplanationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload, S>;
export type AiExplanationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiExplanationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiExplanationCountAggregateInputType | true;
};
export interface AiExplanationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiExplanation'];
        meta: {
            name: 'AiExplanation';
        };
    };
    findUnique<T extends AiExplanationFindUniqueArgs>(args: Prisma.SelectSubset<T, AiExplanationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiExplanationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiExplanationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiExplanationFindFirstArgs>(args?: Prisma.SelectSubset<T, AiExplanationFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiExplanationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiExplanationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiExplanationFindManyArgs>(args?: Prisma.SelectSubset<T, AiExplanationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiExplanationCreateArgs>(args: Prisma.SelectSubset<T, AiExplanationCreateArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiExplanationCreateManyArgs>(args?: Prisma.SelectSubset<T, AiExplanationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiExplanationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiExplanationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiExplanationDeleteArgs>(args: Prisma.SelectSubset<T, AiExplanationDeleteArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiExplanationUpdateArgs>(args: Prisma.SelectSubset<T, AiExplanationUpdateArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiExplanationDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiExplanationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiExplanationUpdateManyArgs>(args: Prisma.SelectSubset<T, AiExplanationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiExplanationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiExplanationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiExplanationUpsertArgs>(args: Prisma.SelectSubset<T, AiExplanationUpsertArgs<ExtArgs>>): Prisma.Prisma__AiExplanationClient<runtime.Types.Result.GetResult<Prisma.$AiExplanationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiExplanationCountArgs>(args?: Prisma.Subset<T, AiExplanationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiExplanationCountAggregateOutputType> : number>;
    aggregate<T extends AiExplanationAggregateArgs>(args: Prisma.Subset<T, AiExplanationAggregateArgs>): Prisma.PrismaPromise<GetAiExplanationAggregateType<T>>;
    groupBy<T extends AiExplanationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiExplanationGroupByArgs['orderBy'];
    } : {
        orderBy?: AiExplanationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiExplanationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiExplanationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiExplanationFieldRefs;
}
export interface Prisma__AiExplanationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    snapshot<T extends Prisma.RepositorySnapshotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositorySnapshotDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositorySnapshotClient<runtime.Types.Result.GetResult<Prisma.$RepositorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiExplanationFieldRefs {
    readonly id: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly snapshotId: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly model: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly purpose: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly howItWorks: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly architecture: Prisma.FieldRef<"AiExplanation", 'Json'>;
    readonly gettingStarted: Prisma.FieldRef<"AiExplanation", 'Json'>;
    readonly skills: Prisma.FieldRef<"AiExplanation", 'String[]'>;
    readonly difficultyLevel: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly difficultyReason: Prisma.FieldRef<"AiExplanation", 'String'>;
    readonly keyTakeaways: Prisma.FieldRef<"AiExplanation", 'String[]'>;
    readonly generatedAt: Prisma.FieldRef<"AiExplanation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AiExplanation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AiExplanation", 'DateTime'>;
}
export type AiExplanationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    where: Prisma.AiExplanationWhereUniqueInput;
};
export type AiExplanationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    where: Prisma.AiExplanationWhereUniqueInput;
};
export type AiExplanationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AiExplanationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AiExplanationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AiExplanationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiExplanationCreateInput, Prisma.AiExplanationUncheckedCreateInput>;
};
export type AiExplanationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiExplanationCreateManyInput | Prisma.AiExplanationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiExplanationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    data: Prisma.AiExplanationCreateManyInput | Prisma.AiExplanationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiExplanationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiExplanationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiExplanationUpdateInput, Prisma.AiExplanationUncheckedUpdateInput>;
    where: Prisma.AiExplanationWhereUniqueInput;
};
export type AiExplanationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiExplanationUpdateManyMutationInput, Prisma.AiExplanationUncheckedUpdateManyInput>;
    where?: Prisma.AiExplanationWhereInput;
    limit?: number;
};
export type AiExplanationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiExplanationUpdateManyMutationInput, Prisma.AiExplanationUncheckedUpdateManyInput>;
    where?: Prisma.AiExplanationWhereInput;
    limit?: number;
    include?: Prisma.AiExplanationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiExplanationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    where: Prisma.AiExplanationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiExplanationCreateInput, Prisma.AiExplanationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiExplanationUpdateInput, Prisma.AiExplanationUncheckedUpdateInput>;
};
export type AiExplanationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
    where: Prisma.AiExplanationWhereUniqueInput;
};
export type AiExplanationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiExplanationWhereInput;
    limit?: number;
};
export type AiExplanationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiExplanationSelect<ExtArgs> | null;
    omit?: Prisma.AiExplanationOmit<ExtArgs> | null;
    include?: Prisma.AiExplanationInclude<ExtArgs> | null;
};
