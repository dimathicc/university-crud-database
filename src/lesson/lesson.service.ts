import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Lesson } from "src/entities/lesson.entity";

@Injectable()
export class LessonService {
    constructor (private readonly datasourceService: DatasourceService) {}

    create(lesson: Lesson) {
        this.datasourceService.getLessons().push(lesson);
        return lesson;
    }

    findOne(id: number) {
        return this.datasourceService.getLessons().find((lesson) => lesson.id == id);
    }

    findAll(): Lesson[] {
        return this.datasourceService.getLessons();
    }

    update(id: number, updatedLesson: Lesson) {
        const index = this.datasourceService
          .getLessons()
          .findIndex((author) => author.id === id);
        this.datasourceService.getLessons()[index] = updatedLesson;
        return this.datasourceService.getLessons()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getLessons()
          .findIndex((lesson) => lesson.id === id);
        this.datasourceService.getLessons().splice(index, 1);
        return HttpStatus.OK;
      }
    
}