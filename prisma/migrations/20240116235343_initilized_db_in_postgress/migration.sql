-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionGoals" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "fatPercentage" INTEGER NOT NULL,
    "proteinPercentage" INTEGER NOT NULL,
    "carboPercentage" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "desiredWeight" INTEGER,

    CONSTRAINT "NutritionGoals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userCreated" TEXT NOT NULL,
    "userUpdated" TEXT,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealItem" (
    "id" TEXT NOT NULL,
    "foodId" INTEGER NOT NULL,
    "mealId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MealItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AminoAcid" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "tryptophan" DOUBLE PRECISION NOT NULL,
    "threonine" DOUBLE PRECISION NOT NULL,
    "isoleucine" DOUBLE PRECISION NOT NULL,
    "leucine" DOUBLE PRECISION NOT NULL,
    "lysine" DOUBLE PRECISION NOT NULL,
    "methionine" DOUBLE PRECISION NOT NULL,
    "cystine" DOUBLE PRECISION NOT NULL,
    "phenylalanine" DOUBLE PRECISION NOT NULL,
    "tyrosine" DOUBLE PRECISION NOT NULL,
    "valine" DOUBLE PRECISION NOT NULL,
    "arginine" DOUBLE PRECISION NOT NULL,
    "histidine" DOUBLE PRECISION NOT NULL,
    "alanine" DOUBLE PRECISION NOT NULL,
    "asparticAcid" DOUBLE PRECISION NOT NULL,
    "glutamicAcid" DOUBLE PRECISION NOT NULL,
    "glycine" DOUBLE PRECISION NOT NULL,
    "proline" DOUBLE PRECISION NOT NULL,
    "serine" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AminoAcid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fatty_acids" (
    "foodId" INTEGER NOT NULL,
    "saturated" DOUBLE PRECISION NOT NULL,
    "monounsaturated" DOUBLE PRECISION NOT NULL,
    "polyunsaturated" DOUBLE PRECISION NOT NULL,
    "twelveZero" DOUBLE PRECISION,
    "fourteenZero" DOUBLE PRECISION,
    "fourteenOne" DOUBLE PRECISION,
    "sixteenZero" DOUBLE PRECISION,
    "sixteenOne" DOUBLE PRECISION,
    "eighteenZero" DOUBLE PRECISION,
    "eighteenOne" DOUBLE PRECISION,
    "eighteenOneT" DOUBLE PRECISION,
    "eighteenTwoN6" DOUBLE PRECISION,
    "eighteenTwoT" DOUBLE PRECISION,
    "eighteenThreeN3" DOUBLE PRECISION,
    "twentyZero" DOUBLE PRECISION,
    "twentyOne" DOUBLE PRECISION,
    "twentyFour" DOUBLE PRECISION,
    "twentyFive" DOUBLE PRECISION,
    "twentyTwoZero" DOUBLE PRECISION,
    "twentyTwoFive" DOUBLE PRECISION,
    "twentyTwoSix" DOUBLE PRECISION,
    "twentyFourZero" DOUBLE PRECISION
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "moisture" DOUBLE PRECISION,
    "kcal" DOUBLE PRECISION,
    "kJ" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "lipids" DOUBLE PRECISION,
    "cholesterol" DOUBLE PRECISION,
    "carbohydrates" DOUBLE PRECISION,
    "dietaryFiber" DOUBLE PRECISION,
    "ash" DOUBLE PRECISION,
    "calcium" DOUBLE PRECISION,
    "magnesium" DOUBLE PRECISION,
    "manganese" DOUBLE PRECISION,
    "phosphorus" DOUBLE PRECISION,
    "iron" DOUBLE PRECISION,
    "sodium" DOUBLE PRECISION,
    "potassium" DOUBLE PRECISION,
    "copper" DOUBLE PRECISION,
    "zinc" DOUBLE PRECISION,
    "retinol" DOUBLE PRECISION,
    "re" DOUBLE PRECISION,
    "rae" DOUBLE PRECISION,
    "thiamin" DOUBLE PRECISION,
    "riboflavin" DOUBLE PRECISION,
    "pyridoxine" DOUBLE PRECISION,
    "niacin" DOUBLE PRECISION,
    "vitaminC" DOUBLE PRECISION,

    CONSTRAINT "Nutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "fieldName" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "labelPt" TEXT NOT NULL,
    "infoodsTagname" TEXT,
    "systematicName" TEXT,
    "commonName" TEXT,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Food_name_key" ON "Food"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AminoAcid_foodId_key" ON "AminoAcid"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "fatty_acids_foodId_key" ON "fatty_acids"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "Nutrient_foodId_key" ON "Nutrient"("foodId");

-- AddForeignKey
ALTER TABLE "NutritionGoals" ADD CONSTRAINT "NutritionGoals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_userCreated_fkey" FOREIGN KEY ("userCreated") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_userUpdated_fkey" FOREIGN KEY ("userUpdated") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealItem" ADD CONSTRAINT "MealItem_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealItem" ADD CONSTRAINT "MealItem_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AminoAcid" ADD CONSTRAINT "AminoAcid_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fatty_acids" ADD CONSTRAINT "fatty_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrient" ADD CONSTRAINT "Nutrient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
