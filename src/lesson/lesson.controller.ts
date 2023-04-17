import { LessonService } from "./lesson.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Lesson } from "src/entities/lesson.entity";

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonService) {
  }

  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLesson: Lesson) {
    return this.lessonsService.update(+id, updateLesson);
  }

  @Post()
  create(@Body() createLesson: Lesson) {
    return this.lessonsService.create(createLesson);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(+id);
  }
}
