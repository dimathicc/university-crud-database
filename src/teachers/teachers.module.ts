import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.model";
import { Teacher } from "src/entities/teachers.entity";
import { TeachersController } from "./teachers.controller";
import { TeacherService } from "./teachers.service";

@Module ( {
    controllers: [TeachersController],
    providers: [TeacherService],
    imports: [DatasourceModule]
})
export class TeachersModule {}