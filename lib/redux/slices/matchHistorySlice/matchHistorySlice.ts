/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getMatchInfo } from "./thunks";


const initialState: matchHistoryState = {
  matchHistory: [],
  status: "idle",
};

export const matchHistorySlice = createSlice({
  name: "matchHistory",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setmatchHistory: (state, action: PayloadAction<Array<MatchHistory>>) => {
      state.matchHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMatchInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMatchInfo.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

/* Types */
export interface matchHistoryState {
    matchHistory: Array<MatchHistory>;
    status: "idle" | "loading" | "failed";
}
export interface MatchHistory {
  matchDate: string, 
  matchDateTimestamp:number, 
  gameType: string, 
  championPlayed:string, 
  didWin:boolean, 
  kills:number, 
  deaths:number, 
  assists:number, 
  goldEarned:number, 
  visionScored:number, 
}
