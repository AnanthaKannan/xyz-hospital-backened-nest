import { Controller, Get } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { LoggerService } from '../logger/logger.service';

@Controller('hospital')
export class HospitalController {
  constructor(
    private readonly hs: HospitalService,
    private readonly logger: LoggerService,
  ) {}

  @Get('login')
  async login() {
    this.logger.log('login', this.constructor.name);
    this.hs.login();
  }
}
