-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "originalLink" TEXT NOT NULL,
    "uniqueLink" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_uniqueLink_key" ON "Link"("uniqueLink");
