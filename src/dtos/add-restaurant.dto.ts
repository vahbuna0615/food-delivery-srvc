import { restaurantStatusType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class AddRestaurantDto {
  
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEnum(restaurantStatusType)
  status: string

}