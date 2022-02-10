import {
  HttpStatus,
  Controller,
  Get,
  Res,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { RiotService } from 'src/providers/riot.service';
import { Response } from 'express';
@Controller('riot')
export class RiotController {
  constructor(private readonly RiotService: RiotService) {}
  @Get()
  async getSummonerInfo(@Res() res: Response): Promise<any> {
    const data = await this.RiotService.getSummonerInfo();
    res.status(HttpStatus.OK).json(data);
    return data;
  }
  @Get('matches/:puuid')
  async getMatchesData(@Param('id') id: string): Promise<any> {
    const data = await this.RiotService.getMatchesData(id);
    return data;
  }
  @Get('match-data/:matchId')
  async getMatchData(@Param('id') id: string): Promise<any> {
    const data = await this.RiotService.getMatchData();
    return data;
  }
}
