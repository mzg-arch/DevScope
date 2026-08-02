/*
  Warnings:

  - You are about to drop the column `treeTruncated` on the `RepositorySnapshot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RepositorySnapshot" DROP COLUMN "treeTruncated",
ADD COLUMN     "limitedByDevScope" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maximumReturnedItems" INTEGER NOT NULL DEFAULT 20000,
ADD COLUMN     "truncatedByGitHub" BOOLEAN NOT NULL DEFAULT false;
