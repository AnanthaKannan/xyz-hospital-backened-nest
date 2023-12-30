import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TodoModule } from './todo/todo.module';
import configuration from './config/configuration';
import { MongoDBModule } from './mongodb.module';
import { FeedbackModule } from './feedback/feedback.module';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [
    AdminModule,
    MongoDBModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TodoModule,
    FeedbackModule,
    HospitalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
