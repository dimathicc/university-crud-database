import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.model";
import { Student } from "src/entities/students.entity"
import { StudentsController } from "./students.controller";
import { StudentService } from "./students.service";

@Module ( {
    controllers: [StudentsController],
    providers: [StudentService],
    imports: [DatasourceModule]
})
export class StudentsModule {}