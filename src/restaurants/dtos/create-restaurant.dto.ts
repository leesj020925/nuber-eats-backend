import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';

//@InputType() //InputType 의 경우 하나의 object 로써 동작하여 각 인자를 분리할 수 없으나,
@ArgsType() //ArgsType의 경우 분리가 가능하다.
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  ownerName: string;
}
