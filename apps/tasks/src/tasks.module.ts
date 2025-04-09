import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule, DomainModule],
})
export class TasksModule {}
