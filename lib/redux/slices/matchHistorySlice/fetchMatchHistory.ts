import axios from 'axios';
import {MatchHistory} from './matchHistorySlice';

export const fetchMatchHistory = async (
    summonerName: string,
    endTime: number,
  ): Promise<Array<MatchHistory>> => {

    const queryString = '?count=20&endTime='+endTime

   let getMatchHistoryResp = await axios.get(`http://localhost:8080/v1/summoner/` + summonerName + '/matches' + queryString)

    
    let result = getMatchHistoryResp.data.matches.map(({ 
        match_date, 
        match_date_timestamp, 
        game_type, 
        champion_played, 
        did_win, 
        kills, 
        deaths, 
        assists, 
        gold_earned, 
        vision_scored, 
     }:any) => ({
        matchDate: match_date, 
        matchDateTimestamp:match_date_timestamp, 
        gameType: game_type, 
        championPlayed:champion_played, 
        didWin:did_win, 
        kills:kills, 
        deaths:deaths, 
        assists:assists, 
        goldEarned:gold_earned, 
        visionScored:vision_scored, 
     }));

 
    return result;
  };
  