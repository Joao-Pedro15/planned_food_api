-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Food_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AminoAcid" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodId" INTEGER NOT NULL,
    "tryptophan" REAL NOT NULL,
    "threonine" REAL NOT NULL,
    "isoleucine" REAL NOT NULL,
    "leucine" REAL NOT NULL,
    "lysine" REAL NOT NULL,
    "methionine" REAL NOT NULL,
    "cystine" REAL NOT NULL,
    "phenylalanine" REAL NOT NULL,
    "tyrosine" REAL NOT NULL,
    "valine" REAL NOT NULL,
    "arginine" REAL NOT NULL,
    "histidine" REAL NOT NULL,
    "alanine" REAL NOT NULL,
    "asparticAcid" REAL NOT NULL,
    "glutamicAcid" REAL NOT NULL,
    "glycine" REAL NOT NULL,
    "proline" REAL NOT NULL,
    "serine" REAL NOT NULL,
    CONSTRAINT "AminoAcid_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fatty_acids" (
    "foodId" INTEGER NOT NULL,
    "saturated" REAL NOT NULL,
    "monounsaturated" REAL NOT NULL,
    "polyunsaturated" REAL NOT NULL,
    "twelveZero" REAL,
    "fourteenZero" REAL,
    "fourteenOne" REAL,
    "sixteenZero" REAL,
    "sixteenOne" REAL,
    "eighteenZero" REAL,
    "eighteenOne" REAL,
    "eighteenOneT" REAL,
    "eighteenTwoN6" REAL,
    "eighteenTwoT" REAL,
    "eighteenThreeN3" REAL,
    "twentyZero" REAL,
    "twentyOne" REAL,
    "twentyFour" REAL,
    "twentyFive" REAL,
    "twentyTwoZero" REAL,
    "twentyTwoFive" REAL,
    "twentyTwoSix" REAL,
    "twentyFourZero" REAL,
    CONSTRAINT "fatty_acids_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodId" INTEGER NOT NULL,
    "moisture" REAL,
    "kcal" REAL,
    "kJ" REAL,
    "protein" REAL,
    "lipids" REAL,
    "cholesterol" REAL,
    "carbohydrates" REAL,
    "dietaryFiber" REAL,
    "ash" REAL,
    "calcium" REAL,
    "magnesium" REAL,
    "manganese" REAL,
    "phosphorus" REAL,
    "iron" REAL,
    "sodium" REAL,
    "potassium" REAL,
    "copper" REAL,
    "zinc" REAL,
    "retinol" REAL,
    "re" REAL,
    "rae" REAL,
    "thiamin" REAL,
    "riboflavin" REAL,
    "pyridoxine" REAL,
    "niacin" REAL,
    "vitaminC" REAL,
    CONSTRAINT "Nutrient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldName" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "labelPt" TEXT NOT NULL,
    "infoodsTagname" TEXT,
    "systematicName" TEXT,
    "commonName" TEXT
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
