-- CreateTable
CREATE TABLE "NutritionGoals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "fatPercentage" INTEGER NOT NULL,
    "proteinPercentage" INTEGER NOT NULL,
    "carboPercentage" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "desiredWeight" INTEGER,
    CONSTRAINT "NutritionGoals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
