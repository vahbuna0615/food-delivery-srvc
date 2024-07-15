import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class AddFoodItemDto {

  @IsNotEmpty()
  @IsUUID()
  restaurantId: string

  @IsNotEmpty()
  @IsString()
  itemName: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  price: number

}