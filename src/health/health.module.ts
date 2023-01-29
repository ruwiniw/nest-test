import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { DogHealthIndicator } from './dog.health';

@Module({
    imports: [TerminusModule, HttpModule],
    controllers: [HealthController],
    providers: [DogHealthIndicator]
})
export class HealthModule {}
