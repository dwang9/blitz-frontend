/* Instruments */
import { counterSlice, matchHistorySlice, summonerInfoSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  summonerInfo: summonerInfoSlice.reducer,
  matchHistory: matchHistorySlice.reducer,
};
