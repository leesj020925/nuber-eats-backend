import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

//Restaurant entity를 extends 하지 않는 이유는 그렇게 될 경우 PartialType의 특성으로 id 또한 optional이 되버리기 때문.
@InputType()
class UpdateRestaurantInput extends PartialType(CreateRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInput)
  data: UpdateRestaurantInput;
}
