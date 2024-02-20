/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchSummonerInfo } from "./fetchSummonerInfo";
import { summonerInfoSlice } from "./summonerInfoSlice";

export const getSummonerInfo = createAppAsyncThunk(
  "summonerInfo/fetchSummonerInfo",
  async (summonerName: string, {dispatch})  => {
    const response = await fetchSummonerInfo(summonerName);

    dispatch(summonerInfoSlice.actions.setSummonerInfo(response))
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);
