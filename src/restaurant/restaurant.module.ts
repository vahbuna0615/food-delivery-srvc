import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
