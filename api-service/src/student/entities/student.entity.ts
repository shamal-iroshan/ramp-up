import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Gender } from 'src/common/enums/gender.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  mobile_number: string;

  @Field()
  @Column()
  dob: Date;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column()
  gender: Gender;
}
