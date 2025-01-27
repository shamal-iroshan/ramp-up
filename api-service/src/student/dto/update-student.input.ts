import { Field, InputType, ID } from '@nestjs/graphql';
import { Gender } from 'src/common/enums/gender.enum';

@InputType()
export class UpdateStudentInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  mobile_number?: string;

  @Field({ nullable: true })
  dob?: Date;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  gender?: Gender;
}
