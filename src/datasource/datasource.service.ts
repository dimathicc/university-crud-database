import { Injectable } from '@nestjs/common';
import { Student } from 'src/entities/students.entity'; 
import { Teacher } from 'src/entities/teachers.entity';
import { Lesson } from 'src/entities/lesson.entity';

@Injectable()
export class DatasourceService {
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private lessons: Lesson[] = [];

  getStudent(): Student[] { return this.students; }

  getTeachers(): Teacher[] { return this.teachers; }

  getLessons(): Lesson[] { return this.lessons; }

}
