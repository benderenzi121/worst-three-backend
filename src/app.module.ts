import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiotModule } from './modules/riot.module';
@Module({
  imports: [RiotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
