import { Injectable, Logger } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class LoggerService extends Logger {
  private readonly logger: winston.Logger;

  constructor() {
    super();

    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
      ],
    });
  }

  log(message: string, context?: string) {
    super.log(message, context);
    this.logger.info(message, { context });
  }

  error(message: string, trace: string, context?: string) {
    super.error(message, trace, context);
    this.logger.error(message, { trace, context });
  }

  warn(message: string, context?: string) {
    super.warn(message, context);
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    super.debug(message, context);
    this.logger.debug(message, { context });
  }
}
