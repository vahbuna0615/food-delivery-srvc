-- CreateTable
CREATE TABLE "FoodItem" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);
