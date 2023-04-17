import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Teacher } from "src/entities/teachers.entity";

@Injectable()
export class TeacherService {
    constructor (private readonly datasourceService: DatasourceService) {}

    create(teacher: Teacher) {
        this.datasourceService.getTeachers().push(teacher);
        return teacher;
    }

    findOne(id: number) {
        return this.datasourceService.getTeachers().find((teacher) => teacher.id == id);
    }

    findAll(): Teacher[] {
        return this.datasourceService.getTeachers();
    }

    update(id: number, updatedTeacher: Teacher) {
        const index = this.datasourceService
          .getTeachers()
          .findIndex((teacher) => teacher.id === id);
        this.datasourceService.getTeachers()[index] = updatedTeacher;
        return this.datasourceService.getTeachers()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getTeachers()
          .findIndex((teacher) => teacher.id === id);
        this.datasourceService.getTeachers().splice(index, 1);
        return HttpStatus.OK;
      }
    
}