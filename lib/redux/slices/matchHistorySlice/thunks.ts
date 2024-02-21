/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchMatchHistory } from "./fetchMatchHistory";
import { matchHistorySlice } from "./matchHistorySlice";

export const getMatchInfo = createAppAsyncThunk(
  "matchHistory/fetchMatchHistory",
  async ({summonerName, endTime, initialMatchHistory}: any, {dispatch})  => {


    const response = await fetchMatchHistory(summonerName, endTime);

    dispatch(matchHistorySlice.actions.setMatchHistory(initialMatchHistory.concat(response)))
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);
