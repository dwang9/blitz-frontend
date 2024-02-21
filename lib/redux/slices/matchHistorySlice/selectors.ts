/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectMatchHistory = (state: ReduxState) => state.matchHistory.matchHistory;
export const selectMatchHistoryStatus = (state: ReduxState) => state.matchHistory.status;
