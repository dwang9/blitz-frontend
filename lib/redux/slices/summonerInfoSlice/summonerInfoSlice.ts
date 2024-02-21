/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getSummonerInfo } from "./thunks";


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
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSummonerInfo.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getSummonerInfo.rejected, (state, action) => {
        state.status = "failed";
      });
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
