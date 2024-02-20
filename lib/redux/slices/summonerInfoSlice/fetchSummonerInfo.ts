import axios from 'axios';
import {SummonerInfo} from './summonerInfoSlice';

export const fetchSummonerInfo = async (
    summonerName: string,
  ): Promise<SummonerInfo> => {


   let getSummonerReq = await axios.get(`http://localhost:8080/v1/summoner/` + summonerName)

    

    const summonerInfo = {
      id: getSummonerReq.data.id,
      summonerName: getSummonerReq.data.summoner_name,
      profileIcon: getSummonerReq.data.profile_icon,
      rank: getSummonerReq.data.rank,
      summonerLevel: getSummonerReq.data.level,
    }
 
    return summonerInfo;
  };
  