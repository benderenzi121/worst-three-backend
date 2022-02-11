import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { resourceLimits } from 'worker_threads';

export class RiotService {
  async getSummonerInfo(summonerName = 'floppyman11'): Promise<any> {
    const data = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-ed551021-8561-472d-bee0-a0a258ce4fd8',
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
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-ed551021-8561-472d-bee0-a0a258ce4fd8',
        },
      },
    );
    let res = data.data.map(async (matchId: any) => {
      const data = await this.getMatchData(matchId);
      return data;
    });
    let gameResults = await Promise.all(res);

    let arr = [];

    gameResults.forEach((game) => {
      game.forEach((summoner) => {
        if (summoner.puuid == puuid) {
          arr.push(summoner);
        }
      });
    });
    return arr;
  }

  async getMatchData(matchId) {
    const data = await axios.get(
      `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        headers: {
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': 'RGAPI-ed551021-8561-472d-bee0-a0a258ce4fd8',
        },
      },
    );

    return data.data.info.participants;
  }
}
