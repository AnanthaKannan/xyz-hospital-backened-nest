import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { Feedback, FeedbackSchema } from './feedback.schema';
import { Hospital, HospitalSchema } from './hospital.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema },
      { name: Feedback.name, schema: FeedbackSchema },
      { name: Hospital.name, schema: HospitalSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class SchemaModule {}
