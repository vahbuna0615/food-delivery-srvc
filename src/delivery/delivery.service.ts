import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly databaseService: DatabaseService){}

  // Create Delivery User
  createDeliveryUser(data: any) {
    return this.databaseService.deliveryUser.create({
      data
    })
  }

  // Get all delivery users
  getAllDeliveryUsers(available: boolean) {
    if (available) return this.databaseService.deliveryUser.findMany({
      where: {
        status: 'Available'
      }
    })

    return this.databaseService.deliveryUser.findMany()
  }

  // Update given delivery user
  updateDeliveryUser(id: string, body: any) {
    return this.databaseService.deliveryUser.update({
      where: {
        id
      },
      data: body
    })
  }

  // Get food items for a given restaurant
  getRestaurantMenu(resId: string) {
    return this.databaseService.foodItem.findMany({
      where: { restaurantId: resId }
    })
  }

  // Create a new order from a given restaurant
  async createOrder(resId: string, allItems: string[]) {

    // Check if restaurant is available
    const restaurant = await this.databaseService.restaurant.findUnique({
      where: {
        id: resId
      }
    })

    if (!restaurant) throw new NotFoundException(`Restaurant with id ${resId} not found`)

    let totalPrice = 0;
    const items = await Promise.all(allItems.map(async (id) => {
      const item = await this.databaseService.foodItem.findUnique({
        where: {
          restaurantId: resId,
          id
        }
      })

      if (item) {
        totalPrice += item.price
      }

      return item
    }))

    if (!items) throw new NotFoundException({
      error: 'No food items found for the given restaurant'
    })

    const data = {
      restaurantId: resId,
      items,
      totalPrice
    }
    
    return this.databaseService.order.create({
      data
    })
  }

  // Get all orders
  getAllOrders() {
    return this.databaseService.order.findMany()
  }

  // View order details of a given order
  getOrderInfo(id: string) {
    return this.databaseService.order.findUnique({
      where: {
        id
      }
    })
  }

  // Endpoint for simulating a restaurant deciding the orderStatus of a given order
  async setOrderStatus(id: string) {

    const statuses = ['Accepted', 'Rejected'];
    const randomStatus: any = statuses[Math.floor(Math.random() * statuses.length)];

    if (randomStatus === 'Rejected') {

      // Update order status
      await this.databaseService.order.update({
        where: {
          id
        },
        data: {
          orderStatus: randomStatus
        }
      })

      // Return order rejected message
      return {
        message: `Order with id ${id} has been rejected`
      }
    }

    const assignedUser = await this.databaseService.deliveryUser.findFirst({
      where: {
        status: 'Available'
      }
    })

    if (!assignedUser) throw new NotFoundException({
      error: 'No available delivery users found'
    })

    // Update delivery agent's status as busy
    await this.databaseService.deliveryUser.update({
      where: {
        id: assignedUser.id
      },
      data: {
        status: 'Busy'
      }
    })
    
    // Update order with status and assigned User's id
    await this.databaseService.order.update({
      where: {
        id
      },
      data: {
        orderStatus: randomStatus,
        deliveryStatus: 'InProgress',
        assignedUser: assignedUser.id
      }
    })

    return {
      message: `Order with id ${id} accepted`,
      assignedUser: assignedUser.agentName
    }

  }

  // Complete delivery
  async completeDelivery(id: string) {

    const order = await this.databaseService.order.findUnique({
      where: {
        id
      }
    })

    if (!order) throw new NotFoundException({
      error: `No orders found with id ${id}`
    })

    // Update delivery status as delivered
    await this.databaseService.order.update({
      where: {
        id
      },
      data: {
        deliveryStatus: 'Delivered'
      }
    })

    // Update delivery agent's status as Available
    await this.databaseService.deliveryUser.update({
      where: {
        id: order.assignedUser
      },
      data: {
        status: 'Available'
      }
    })

    return {
      message: `Order id ${order.id} has been delivered successfully`
    }

  }

  // Update ratings of an order post delivery

  updateOrderInfo(id: string, body: any) {
    return this.databaseService.order.update({
      where: {
        id
      },
      data: body
    })
  }

}
