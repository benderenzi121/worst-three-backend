import { Module } from '@nestjs/common';
import { RiotController } from '../controllers/riot.controller';
import { RiotService } from '../providers/riot.service';

@Module({
  imports: [],
  controllers: [RiotController],
  providers: [RiotService],
})
export class RiotModule {}
