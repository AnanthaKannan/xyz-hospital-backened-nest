import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const value: number = 0 / 0;
    return `Hello World! updated ${value}`;
  }
}
