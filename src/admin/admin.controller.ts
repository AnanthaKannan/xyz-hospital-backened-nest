import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dtos/create-admin.dtos';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(public adminService: AdminService) {}

  @Get()
  listMessage() {
    return this.adminService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateAdminDto) {
    console.log(body);
    return this.adminService.create(body);
  }

  @Get('/:id')
  getMessage(@Param() param: any) {
    console.log('parm', param);
    const admin = this.adminService.findOne(param.id);

    if (!admin) throw new NotFoundException('admin not found');
    return admin;
  }
}
