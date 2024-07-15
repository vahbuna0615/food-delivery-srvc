
# Project - Food Delivery Backend Service

## Overview
NestJS backend service with PostgreSQL and Prisma to handle food delivery for multiple restaurants.

## Technologies
- **NestJS**
- **PostgreSQL**
- **Prisma**

## Prerequisites  
- Run all prisma migrations present, in case of a local setup ( **Command** - `npm run migrations:all`). 
- Add a restaurant of status 'Online' and food items for the same, before creating an order. Also add delivery users with status 'Available'.
- The 'Important Endpoints' can be used to simulate the flow of the project. For further testing, the 'Additional Endpoints' can be used as well.

## Important Endpoints

### 1. Add a New Restaurant

**Endpoint:** `POST /restaurant`

**Request Body:**
```json
{
  "name": "RestaurantName",
  "status": "Online"
}
```
---

### 2. Add a New Food Item

**Endpoint:** `POST /restaurant/food-item`

**Request Body:**
```json
{
  "restaurantId": "da5a3398-3f45-4539-9c63-848644faccc8",
  "itemName": "Food item name",
  "description": "Food item description",
  "price": 10
}
```
---

### 3. Get a List of Available Restaurants

**Endpoint:** `GET /restaurant?available=true`

---

### 4. Add Delivery Users

**Endpoint:** `POST /delivery/user`

**Request Body:**
```json
{
  "agentName": "user 4",
  "status": "Available"
}
```
---

### 5. Get the Menu of Available Items of a Given Restaurant

**Endpoint:** `GET /delivery/:resId/menu`

---

### 6. Create a New Order

**Endpoint:** `POST /delivery/:resId/order`

**Request Body:**
```json
{
  "items": ["8b0a0638-33a2-4bd3-8f11-31b267ce10de", "af002256-04a6-460d-a7a3-2d3385500460"]
}
```

---

### 7. Endpoint for Simulating the Restaurant Accepting/Rejecting Given Order

**Endpoint:** `PUT /delivery/order/:id/status`

---

### 8. Endpoint for Completing Delivery

**Endpoint:** `PUT /delivery/order/:id/delivered`

---

### 9. Endpoint for Updating Ratings of an Order After Delivery is Completed

**Endpoint:** `PUT /delivery/order/:id/ratings`

**Request Body:**
```json
{
  "rating": 3,
  "foodRating": 5
}
```

## Additional Endpoints

### 1. Get All Food Items

**Endpoint:** `GET /restaurant/food-item`

---
### 2. Get All Restaurants

**Endpoint:** `GET /restaurant`

---
### 3. Update Food Item

**Endpoint:** `PUT /restaurant/food-item/:id`

---
### 4. Update Restaurant Info

**Endpoint:** `PUT /restaurant/:id`

---
### 5. Get All Delivery Users

**Endpoint:** `GET /delivery/user`

---
### 6. Get All Orders

**Endpoint:** `GET /delivery/order`

---
### 7. Get Order Info

**Endpoint:** `GET /delivery/order/:id`

---
### 8. Update a Delivery User's Info

**Endpoint:** `PUT /delivery/user/:id`

---
### 9. Update an Order Info

**Endpoint:** `PUT /delivery/order/:id`