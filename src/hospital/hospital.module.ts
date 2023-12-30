import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { SchemaModule } from '../schemas/schemas.module';
import { LoggerService } from '../logger/logger.service';

@Module({
  providers: [HospitalService, LoggerService],
  controllers: [HospitalController],
  imports: [SchemaModule],
})
export class HospitalModule {}
