import { delUserStatusType } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export class AddDeliveryUserDto {

  @IsNotEmpty()
  @IsString()
  agentName: string

  @IsNotEmpty()
  @IsEnum(delUserStatusType)
  status: string

}