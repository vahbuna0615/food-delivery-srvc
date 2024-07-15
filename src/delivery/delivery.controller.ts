import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { AddDeliveryUserDto } from 'src/dtos/add-delivery-user.dto';
import { UpdateOrderRatings } from 'src/dtos/update-order-ratings.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  // Endpoint for creating Delivery Users
  @Post('user')
  @HttpCode(HttpStatus.CREATED)
  addDeliveryUser(@Body() body: AddDeliveryUserDto) {
    return this.deliveryService.createDeliveryUser(body);
  }

  // Get all Delivery Users
  
  // Get food items for a given restaurant id
  @Get(':resId/menu')
  @HttpCode(HttpStatus.OK)
  getRestaurantMenu(@Param('resId') resId: string) {
    return this.deliveryService.getRestaurantMenu(resId);
  }

  // Create a new order from a given restaurant
  @Post(':resId/order')
  @HttpCode(HttpStatus.CREATED)
  addNewOrder(@Param('resId') resId: string, @Body('items') allItems: string[]) {
    return this.deliveryService.createOrder(resId, allItems);
  }

  // Get all orders

  // View order details of a given order
  @Get('order/:id')
  @HttpCode(HttpStatus.OK)
  getOrderDetails(@Param('id') id: string) {
    return this.deliveryService.getOrderInfo(id)
  }

  // Update specific delivery user

  // Update specific order

  // Endpoint for randomly updating orderStatus of a given order
  @Put('order/:id/status')
  @HttpCode(HttpStatus.OK)
  setOrderStatus(@Param('id') id: string) {
    return this.deliveryService.setOrderStatus(id)
  }

  // Endpoint for completing delivery
  @Put('order/:id/delivered')
  @HttpCode(HttpStatus.OK)
  completeDelivery(@Param('id') id: string) {
    return this.deliveryService.completeDelivery(id)
  }

  // Endpoint for updating ratings of an order post delivery
  @Put('order/:id/ratings')
  @HttpCode(HttpStatus.OK)
  updateRatings(@Param('id') id: string, @Body() body: UpdateOrderRatings) {
    return this.deliveryService.updateOrderInfo(id, body)
  }

}
