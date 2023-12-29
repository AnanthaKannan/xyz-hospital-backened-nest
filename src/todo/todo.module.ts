import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { LoggerService } from '../logger/logger.service';
import { TodoController } from './todo.controller';
// import { MongooseModule } from '@nestjs/mongoose';
import { SchemaModule } from '../schemas/schemas.module';
// import { Todo, TodoSchema } from '../schemas/todo.schema';

@Module({
  providers: [TodoService, LoggerService],
  controllers: [TodoController],
  imports: [SchemaModule],
})
export class TodoModule {}
