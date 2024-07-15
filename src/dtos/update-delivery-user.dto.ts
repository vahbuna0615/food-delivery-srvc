import { delUserStatusType } from "@prisma/client"
import { IsEnum, IsOptional, IsString } from "class-validator"

export class UpdateDeliveryUserDto {
  
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEnum(delUserStatusType)
  status?: string
}