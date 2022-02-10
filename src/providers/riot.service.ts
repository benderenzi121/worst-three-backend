import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';

export class RiotService {
  async getSummonerInfo(summonerName = 'floppyman11'): Promise<any> {
    const data = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-90812dcb-a8be-410b-8fe4-5c6351ecd101',
        },
      },
    );

    return data.data;
  }

  async getMatchesData(
    puuid = 'HEzgBBE9gck1qjF22AOiznCAstanGBqy3RYiWQVHysaOO0Klx4RvVnuvu5WFIAS7MwCOP0E9CXeKXA',
  ): Promise<any> {
    console.log('irun');
    const data = await axios.get(
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=30`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-90812dcb-a8be-410b-8fe4-5c6351ecd101',
        },
      },
    );
    console.log(data);
    return data.data;
  }

  async getMatchData() {
    const data = await axios.get(
      `https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4205559914`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-90812dcb-a8be-410b-8fe4-5c6351ecd101',
        },
      },
    );
    console.log(data);
    return data.data;
  }
}
