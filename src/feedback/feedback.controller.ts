import { Controller, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { LoggerService } from '../logger/logger.service';

@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly fs: FeedbackService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  async list() {
    this.logger.log('init list', this.constructor.name);
    return await this.fs.list();
  }
}
