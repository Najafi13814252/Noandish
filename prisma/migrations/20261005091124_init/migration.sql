-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_courseId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
