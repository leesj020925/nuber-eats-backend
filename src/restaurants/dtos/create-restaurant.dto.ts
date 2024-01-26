import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

//@InputType() //InputType 의 경우 하나의 object 로써 동작하여 각 인자를 분리할 수 없으나,
@InputType() //ArgsType의 경우 분리가 가능하다.
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  // InputType,
) {}
