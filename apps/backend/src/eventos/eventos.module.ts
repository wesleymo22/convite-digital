import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';

@Module({
  controllers: [EventosController],
  providers: [EventoPrisma],
  imports: [DbModule],
})
export class EventosModule {}
