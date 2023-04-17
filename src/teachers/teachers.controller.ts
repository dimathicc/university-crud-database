import { TeacherService } from "./teachers.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Teacher } from "src/entities/teachers.entity";

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeacherService) {
  }

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeacher: Teacher) {
    return this.teachersService.update(+id, updateTeacher);
  }

  @Post()
  create(@Body() createTeacher: Teacher) {
    return this.teachersService.create(createTeacher);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(+id);
  }
}
