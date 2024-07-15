
# Project - Food Delivery Backend Service

## Overview
NestJS backend service with PostgreSQL and Prisma to handle food delivery for multiple restaurants.

## Technologies
- **NestJS**
- **PostgreSQL**
- **Prisma**

## Deployed Base Url
https://food-delivery-srvc.onrender.com

## Prerequisites  
- Run all prisma migrations present, in case of a local setup ( **Command** - `npm run migrations:all`). 
- Add a restaurant of status 'Online' and food items for the same, before creating an order. Also add delivery users with status 'Available'.
- The 'Important Endpoints' can be used to simulate the flow of the project. For further testing, the 'Additional Endpoints' can be used as well.

## Important Endpoints

### 1. Add a New Restaurant

**Endpoint:** `POST /restaurant`

**Description:** Adds and saves a new restaurant's info into the DB

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

**Description:** Adds a new food item into the DB for a given restaurant

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

**Description:** Retrieves a list of all the restaurants that are currently 'Online'

**Endpoint:** `GET /restaurant?available=true`

---

### 4. Add Delivery Users

**Endpoint:** `POST /delivery/user`

**Description:** Adds a new delivery agent's info into the DB

**Request Body:**
```json
{
  "agentName": "user 4",
  "status": "Available"
}
```
---

### 5. Get the Menu of Available Items of a Given Restaurant

**Description:** Retrieves all of the food items that belong to the given restaurant's menu

**Endpoint:** `GET /delivery/:resId/menu`

---

### 6. Create a New Order

**Endpoint:** `POST /delivery/:resId/order`

**Description:** Creates a new order with requested items from the given restaurant

**Request Body:**
```json
{
  "items": ["8b0a0638-33a2-4bd3-8f11-31b267ce10de", "af002256-04a6-460d-a7a3-2d3385500460"]
}
```

---

### 7. Endpoint for Simulating the Restaurant Accepting/Rejecting Given Order

**Description:** Endpoint which either rejects or accepts an order, simulating how a restaurant would do in real time. If order is rejected, it returns a message stating that the Order with given id has been rejected, and updates the orderStatus as such. Or else, it automatically assigns the first available delivery agent to the Order, updates the agent's status as 'Busy', updates orderStatus as accepted and deliveryStatus as 'InProgress'.

**Endpoint:** `PUT /delivery/order/:id/status`

---

### 8. Endpoint for Completing Delivery

**Description:** Endpoint which updates the deliveryStatus of the given order as 'Delivered', and updates the status of the assigned delivery agent back to 'Available'.

**Endpoint:** `PUT /delivery/order/:id/delivered`

---

### 9. Endpoint for Updating Ratings of an Order After Delivery is Completed

**Description:** Endpoint that can be used by users to provide delivery and food ratings for the given order.

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

**Description:** Retrieves all food items present in the DB

**Endpoint:** `GET /restaurant/food-item`

---
### 2. Get All Restaurants

**Description:** Retrieves all restaurants present in the DB.

**Endpoint:** `GET /restaurant`

---
### 3. Update Food Item

**Description:** Updates an existing food item in the DB

**Endpoint:** `PUT /restaurant/food-item/:id`

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
### 4. Update Restaurant Info

**Description:** Updates an existing restaurant's info in the DB

**Endpoint:** `PUT /restaurant/:id`

**Request Body:**
```json
{
  "name": "RestaurantName2",
  "status": "Offline"
}
```

---
### 5. Get All Delivery Users

**Description:** Retrieves all delivery users saved in the DB

**Endpoint:** `GET /delivery/user`

---
### 6. Get All Orders

**Description:** Retrieves all orders that have been saved in the DB

**Endpoint:** `GET /delivery/order`

---
### 7. Get Order Info

**Description:** Retrieves an existing order's info in the DB

**Endpoint:** `GET /delivery/order/:id`

---
### 8. Update a Delivery User's Info

**Description:** Updates an existing delivery user's info in the DB

**Endpoint:** `PUT /delivery/user/:id`

**Request Body:**
```json
{
  "name": "Sample user",
  "status": "Busy"
}
```

---
### 9. Update an Order Info

**Description:** Updates an existing order's info in the DB

**Endpoint:** `PUT /delivery/order/:id`

**Request Body:**
```json
{
  "orderStatus": "Accepted",
  "assignedUser": "8a5a3398-3f45-4539-9c63-848644facccd",
  "deliveryStatus": "InProgress",
  "rating": 2,
  "foodRating": 4
}
```