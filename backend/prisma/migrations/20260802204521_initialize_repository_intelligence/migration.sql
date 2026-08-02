-- CreateEnum
CREATE TYPE "AnalysisStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "Repository" (
    "id" TEXT NOT NULL,
    "githubId" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "description" TEXT,
    "defaultBranch" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "primaryLanguage" TEXT,
    "topics" TEXT[],
    "stars" INTEGER NOT NULL DEFAULT 0,
    "forks" INTEGER NOT NULL DEFAULT 0,
    "openIssues" INTEGER NOT NULL DEFAULT 0,
    "licenseName" TEXT,
    "licenseIdentifier" TEXT,
    "ownerAvatarUrl" TEXT,
    "githubUpdatedAt" TIMESTAMP(3),
    "githubPushedAt" TIMESTAMP(3),
    "lastSyncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepositorySnapshot" (
    "id" TEXT NOT NULL,
    "repositoryId" TEXT NOT NULL,
    "commitSha" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'PENDING',
    "treeData" JSONB,
    "treeTruncated" BOOLEAN NOT NULL DEFAULT false,
    "itemsAnalyzed" INTEGER NOT NULL DEFAULT 0,
    "analysisStartedAt" TIMESTAMP(3),
    "analysisCompletedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepositorySnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageStatistic" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fileCount" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "extensions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnologyDetection" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "confidence" TEXT NOT NULL,
    "evidence" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TechnologyDetection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiExplanation" (
    "id" TEXT NOT NULL,
    "snapshotId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "howItWorks" TEXT NOT NULL,
    "architecture" JSONB NOT NULL,
    "gettingStarted" JSONB NOT NULL,
    "skills" TEXT[],
    "difficultyLevel" TEXT NOT NULL,
    "difficultyReason" TEXT NOT NULL,
    "keyTakeaways" TEXT[],
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiExplanation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_githubId_key" ON "Repository"("githubId");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_fullName_key" ON "Repository"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_githubUrl_key" ON "Repository"("githubUrl");

-- CreateIndex
CREATE INDEX "Repository_owner_name_idx" ON "Repository"("owner", "name");

-- CreateIndex
CREATE INDEX "Repository_lastSyncedAt_idx" ON "Repository"("lastSyncedAt");

-- CreateIndex
CREATE INDEX "RepositorySnapshot_status_idx" ON "RepositorySnapshot"("status");

-- CreateIndex
CREATE INDEX "RepositorySnapshot_createdAt_idx" ON "RepositorySnapshot"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "RepositorySnapshot_repositoryId_commitSha_key" ON "RepositorySnapshot"("repositoryId", "commitSha");

-- CreateIndex
CREATE INDEX "LanguageStatistic_snapshotId_idx" ON "LanguageStatistic"("snapshotId");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageStatistic_snapshotId_name_key" ON "LanguageStatistic"("snapshotId", "name");

-- CreateIndex
CREATE INDEX "TechnologyDetection_snapshotId_idx" ON "TechnologyDetection"("snapshotId");

-- CreateIndex
CREATE UNIQUE INDEX "TechnologyDetection_snapshotId_category_name_key" ON "TechnologyDetection"("snapshotId", "category", "name");

-- CreateIndex
CREATE INDEX "AiExplanation_snapshotId_idx" ON "AiExplanation"("snapshotId");

-- CreateIndex
CREATE UNIQUE INDEX "AiExplanation_snapshotId_model_key" ON "AiExplanation"("snapshotId", "model");

-- AddForeignKey
ALTER TABLE "RepositorySnapshot" ADD CONSTRAINT "RepositorySnapshot_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageStatistic" ADD CONSTRAINT "LanguageStatistic_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "RepositorySnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologyDetection" ADD CONSTRAINT "TechnologyDetection_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "RepositorySnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiExplanation" ADD CONSTRAINT "AiExplanation_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "RepositorySnapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
