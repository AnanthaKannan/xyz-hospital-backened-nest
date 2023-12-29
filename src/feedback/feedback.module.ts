import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { LoggerService } from '../logger/logger.service';
import { FeedbackController } from './feedback.controller';
import { SchemaModule } from '../schemas/schemas.module';

@Module({
  providers: [FeedbackService, LoggerService],
  controllers: [FeedbackController],
  imports: [SchemaModule],
})
export class FeedbackModule {}
