import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { LoggerService } from '../logger/logger.service'; // Adjust the path accordingly
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  providers: [TodoService, LoggerService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
})
export class TodoModule {}
