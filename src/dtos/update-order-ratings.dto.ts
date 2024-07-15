import { IsNumber, Max, Min } from "class-validator";

export class UpdateOrderRatings {

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number

  @IsNumber()
  @Min(1)
  @Max(5)
  foodRating: number

}