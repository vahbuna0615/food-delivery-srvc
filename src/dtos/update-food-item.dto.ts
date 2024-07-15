import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator"

export class UpdateFoodItemDto {

  @IsOptional()
  @IsUUID()
  restaurantId?: string

  @IsOptional()
  @IsString()
  itemName?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsNumber()
  price?: number

}