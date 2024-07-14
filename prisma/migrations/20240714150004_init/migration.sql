-- CreateEnum
CREATE TYPE "restaurantStatusType" AS ENUM ('Online', 'Offline');

-- CreateEnum
CREATE TYPE "delUserStatusType" AS ENUM ('Busy', 'Available');

-- CreateEnum
CREATE TYPE "orderStatusType" AS ENUM ('Accepted', 'Rejected');

-- CreateEnum
CREATE TYPE "deliveryStatusType" AS ENUM ('InProgress', 'Delivered');

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "restaurantStatusType" NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "items" JSONB[],
    "totalPrice" INTEGER NOT NULL,
    "orderStatus" "orderStatusType",
    "assignedUser" TEXT,
    "deliveryStatus" "deliveryStatusType",
    "rating" INTEGER,
    "foodRating" INTEGER,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryUser" (
    "id" TEXT NOT NULL,
    "agentName" TEXT NOT NULL,
    "status" "delUserStatusType" NOT NULL,

    CONSTRAINT "DeliveryUser_pkey" PRIMARY KEY ("id")
);
