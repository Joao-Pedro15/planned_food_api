/*
  Warnings:

  - You are about to drop the column `desiredWeight` on the `NutritionGoals` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NutritionGoals" DROP COLUMN "desiredWeight",
ALTER COLUMN "calories" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fatPercentage" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "proteinPercentage" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "carboPercentage" SET DATA TYPE DOUBLE PRECISION;
