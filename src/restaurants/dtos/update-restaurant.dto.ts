import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
class UpdateRestaurantInput extends PartialType(CreateRestaurantDto) {} //Restaurant entity 를 extends 하지 않는 이유는 그렇게 될 경우 id 또한 옵션이 되버리기 때문.

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInput)
  data: UpdateRestaurantInput;
}
