import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { DatabaseModule } from './database/database.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    RestaurantModule, 
    DatabaseModule, 
    DeliveryModule
  ]
})
export class AppModule {}
