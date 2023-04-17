import { StudentService } from "./students.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Student } from "src/entities/students.entity";

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentService) {
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudent: Student) {
    return this.studentsService.update(+id, updateStudent);
  }

  @Post()
  create(@Body() createStudent: Student) {
    return this.studentsService.create(createStudent);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
