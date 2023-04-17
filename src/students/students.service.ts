import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Student } from "src/entities/students.entity";

@Injectable()
export class StudentService {
    constructor (private readonly datasourceService: DatasourceService) {}

    create(student: Student) {
        this.datasourceService.getStudent().push(student);
        return student;
    }

    findOne(id: number) {
        return this.datasourceService.getStudent().find((student) => student.id == id);
    }

    findAll(): Student[] {
        return this.datasourceService.getStudent();
    }

    update(id: number, updatedStudent: Student) {
        const index = this.datasourceService
          .getStudent()
          .findIndex((student) => student.id === id);
        this.datasourceService.getStudent()[index] = updatedStudent;
        return this.datasourceService.getStudent()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getStudent()
          .findIndex((student) => student.id === id);
        this.datasourceService.getStudent().splice(index, 1);
        return HttpStatus.OK;
      }
    
}