import { Controller, Get, Body, Post } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service'; // Adjust the path accordingly
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly service: TodoService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  async index() {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeee loging');
    this.logger.log('Getting hello message...', 'AppService');
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.service.create(createTodoDto);
  }
}
