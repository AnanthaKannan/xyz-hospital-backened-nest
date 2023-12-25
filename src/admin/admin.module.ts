import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminRepository } from './admin.repository';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  // which all are the class are injectable, it should be add in the provider
  providers: [AdminRepository, AdminService],
})
export class AdminModule {}
