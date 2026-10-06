/*
  Warnings:

  - Made the column `price` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `level` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_categoryId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "level" SET NOT NULL,
ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
