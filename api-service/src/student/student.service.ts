import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  // Function to calculate age from DOB
  private calculateAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  // Create student
  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { dob } = createStudentInput;

    // Calculate age
    const age = this.calculateAge(dob);

    // Create a new Student entity
    const student = this.studentRepository.create({
      ...createStudentInput,
      age, // Set calculated age
    });

    // Save the student to the database
    return this.studentRepository.save(student);
  }

  // Update student
  async update(updateStudentInput: UpdateStudentInput): Promise<Student> {
    const { id } = updateStudentInput;

    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }

    if (updateStudentInput.dob) {
      updateStudentInput.age = this.calculateAge(updateStudentInput.dob);
    }

    Object.assign(student, updateStudentInput);
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  async remove(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }

    await this.studentRepository.remove(student);

    console.log(`Student with ID ${id} deleted successfully`, student);

    return student; // Return the deleted student
  }
}
