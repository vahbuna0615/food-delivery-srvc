import { restaurantStatusType } from "@prisma/client"
import { IsEnum, IsOptional, IsString } from "class-validator"

export class UpdateRestaurantDto {
  
  @IsOptional()
  @IsString()
  name ?: string

  @IsOptional()
  @IsEnum(restaurantStatusType)
  status ?: string

}