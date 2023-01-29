import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck, HttpHealthIndicator, DiskHealthIndicator, MemoryHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';
import { DogHealthIndicator } from './dog.health';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private http: HttpHealthIndicator,
        private mongoose: MongooseHealthIndicator,
        private readonly disk: DiskHealthIndicator,
        private memory: MemoryHealthIndicator,
        private dogHealthIndicator: DogHealthIndicator
    ) {}

    @Get()
    @HealthCheck()
    check(){
        return this.health.check([
            () => this.http.pingCheck('basic check', 'http://localhost:3000'),
            () => this.mongoose.pingCheck('mongo'),
            () => this.disk.checkStorage('diskStorage', { thresholdPercent: 0.5, path: 'C:\\'}),
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
            () => this.dogHealthIndicator.isHealthy('dog')
        ]);
    }
}
