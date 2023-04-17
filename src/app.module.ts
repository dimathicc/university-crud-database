import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource/datasource.model';
import { LessonModule } from './lesson/lesson.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [LessonModule, StudentsModule, TeachersModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
