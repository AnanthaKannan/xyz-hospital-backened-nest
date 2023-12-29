import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TodoModule } from './todo/todo.module';
import configuration from './config/configuration';
import { MongoDBModule } from './mongodb.module';

@Module({
  imports: [
    AdminModule,
    MongoDBModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
