import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.model";
import { Lesson } from "src/entities/lesson.entity"
import { LessonsController } from "./lesson.controller";
import { LessonService } from "./lesson.service";
 
@Module ( {
    controllers: [LessonsController],
    providers: [LessonService],
    imports: [DatasourceModule]
})
export class LessonModule {}