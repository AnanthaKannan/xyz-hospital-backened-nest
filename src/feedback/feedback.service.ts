import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Feedback, FeedbackDocument } from '../schemas/feedback.schema';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback.name) private readonly model: Model<FeedbackDocument>,
    private readonly logger: LoggerService,
  ) {}

  async list(): Promise<Feedback[]> {
    this.logger.log('init list', this.constructor.name);
    throw new Error('Test error');
    return await this.model.find().exec();
  }
}
