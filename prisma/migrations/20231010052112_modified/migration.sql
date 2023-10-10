/*
  Warnings:

  - You are about to drop the column `uniqueLink` on the `Link` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortenLink]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortenLink` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_uniqueLink_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "uniqueLink",
ADD COLUMN     "shortenLink" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortenLink_key" ON "Link"("shortenLink");
