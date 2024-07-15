import { deliveryStatusType, orderStatusType } from "@prisma/client"
import { IsEnum, IsNumber, IsOptional, IsUUID, Max, Min } from "class-validator"

export class UpdateOrderDto {
  
  @IsOptional()
  @IsEnum(orderStatusType)
  orderStatus?: string

  @IsOptional()
  @IsUUID()
  assignedUser?: string

  @IsOptional()
  @IsEnum(deliveryStatusType)
  deliveryStatus?: string

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating?: number

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  foodRating?: number
}