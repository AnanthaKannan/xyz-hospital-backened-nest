import { Controller, Get, Post } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  listMessage() {}

  @Post()
  createMessage() {}

  @Get(':/id')
  getMessage() {}
}
