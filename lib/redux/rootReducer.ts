/* Instruments */
import { matchHistorySlice, summonerInfoSlice } from "./slices";

export const reducer = {
  summonerInfo: summonerInfoSlice.reducer,
  matchHistory: matchHistorySlice.reducer,
};
