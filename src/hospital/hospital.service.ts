import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Hospital, HospitalDocument } from '../schemas/hospital.schema';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name) private readonly model: Model<HospitalDocument>,
    private readonly logger: LoggerService,
  ) {}

  async login(): Promise<Hospital> {
    this.logger.log('login', this.constructor.name);
    return await this.model.findOne().exec();
  }
}
