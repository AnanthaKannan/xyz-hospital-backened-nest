import { Controller, Get, Body, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async index() {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeee loging');
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.service.create(createTodoDto);
  }
}
