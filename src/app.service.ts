import { Injectable } from '@nestjs/common';
import { SecretsRetrieverService } from 'nest-aws-secrets-manager';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // constructor(private readonly secretsRetrieverService: SecretsRetrieverService) {}

  // private async getCredentials: Credentials {
  //   return await this.secretsRetrieverService.getSecret<Credentials>('app-credentials');
  // }
}
