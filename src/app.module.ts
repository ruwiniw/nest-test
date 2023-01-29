import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { HealthModule } from './health/health.module';
import { AWSSecretsManagerModule } from 'nest-aws-secrets-manager';
import { SecretsManager } from 'aws-sdk';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://user:user123@cluster0.yzsiitl.mongodb.net/course?retryWrites=true&w=majority'),
    AWSSecretsManagerModule.forRoot(new SecretsManager()),
    MongooseModule.forRoot('mongodb://localhost:27017'),
    TodoModule,
    HealthModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
