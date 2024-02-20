/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: SummonerInfoState = {
  summonerInfo: {
    id:"",
    summonerName:"",
    profileIcon:"",
    rank:"",
    summonerLevel:0,
  },
  status: "idle",
};

export const summonerInfoSlice = createSlice({
  name: "summonerInfo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSummonerInfo: (state, action: PayloadAction<SummonerInfo>) => {
      state.summonerInfo = action.payload;
    },
  },
});

/* Types */
export interface SummonerInfoState {
    summonerInfo: SummonerInfo;
    status: "idle" | "loading" | "failed";
}
export interface SummonerInfo {
  id: string;
  summonerName: string;
  profileIcon: string;
  rank: string;
  summonerLevel: number;
}
