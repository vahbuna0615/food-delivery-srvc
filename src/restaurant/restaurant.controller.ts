import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { AddRestaurantDto } from "src/dtos/add-restaurant.dto";
import { UpdateRestaurantDto } from "src/dtos/update-restaurant-info.dto";
import { AddFoodItemDto } from "src/dtos/add-food-item.dto";
import { UpdateFoodItemDto } from "src/dtos/update-food-item.dto";

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService){}

  // Add a new restaurant
  @Post()
  @HttpCode(HttpStatus.CREATED)
  addRestaurant(@Body() body: AddRestaurantDto){
    return this.restaurantService.addNewRestaurant(body);
  }

  // Add a new food item
  @Post('food-item')
  @HttpCode(HttpStatus.CREATED)
  addNewFoodItem(@Body() body: AddFoodItemDto){
    return this.restaurantService.addFoodItem(body);
  }

  // Get all food items
  @Get('food-item')
  @HttpCode(HttpStatus.OK)
  getAllFoodItems() {
    return this.restaurantService.getAllFoodItems();
  }

  // Retrieve all available restaurants, or just all restaurants present in the db
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllRestaurants(@Query('available') available: boolean) {
    return this.restaurantService.getAllRestaurants(available);
  }

  // Update Food Item Info
  @Put('food-item/:id')
  @HttpCode(HttpStatus.OK)
  updateFoodItemInfo(@Param('id') id: string, @Body() body: UpdateFoodItemDto ){
    return this.restaurantService.updateFoodItemInfo(id, body)
  }

  // Update restaurant info
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateRestaurantInfo(@Param('id') id: string, @Body() body: UpdateRestaurantDto) {
    return this.restaurantService.updateRestaurantInfo(id, body)
  }

}