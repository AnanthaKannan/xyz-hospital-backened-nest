import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { Feedback, FeedbackSchema } from './feedback.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema },
      { name: Feedback.name, schema: FeedbackSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class SchemaModule {}
