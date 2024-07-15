import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class RestaurantService {
  constructor(private readonly databaseService: DatabaseService){}

  // Add new restaurant
  addNewRestaurant(data: any) {
    return this.databaseService.restaurant.create({
      data
    })
  }

  // Add new food item 
  addFoodItem(data: any) {
    return this.databaseService.foodItem.create({
      data
    })
  }

  // Get all food items
  getAllFoodItems() {
    return this.databaseService.foodItem.findMany();
  }

  // Retrieve all restaurants
  getAllRestaurants(available: boolean){
    if (available) return this.databaseService.restaurant.findMany({
      where: { status: 'Online' }      
    })

    return this.databaseService.restaurant.findMany();
  }

  // Update food item info
  updateFoodItemInfo(id: string, data: any) {
    return this.databaseService.foodItem.update({
      where: { id: id },
      data
    })
  }

  // Update given restaurant
  updateRestaurantInfo(id: string, body: any) {
    return this.databaseService.restaurant.update({
      where: { id: id },
      data: body
    })
  }

}