import { Field, InputType } from '@nestjs/graphql';
import { Gender } from 'src/common/enums/gender.enum';

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  mobile_number: string;

  @Field()
  dob: Date;

  @Field()
  gender: Gender;
}
