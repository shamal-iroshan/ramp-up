import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student], { name: 'students' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(updateStudentInput);
  }

  @Mutation(() => Student)
  async removeStudent(@Args('id') id: number): Promise<Student> {
    return this.studentService.remove(id);
  }
}
