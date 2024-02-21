"use client";

/* Core */
import { useState } from "react";
import ReactPaginate from 'react-paginate';

/* Instruments */
import {
  matchHistorySlice,
  useSelector,
  useDispatch,
  getMatchInfo,
  selectMatchHistory,
  MatchHistory,
  selectSummonerInfo,
  selectMatchHistoryStatus,
} from "@/lib/redux";
import styles from "./matchHistory.module.css";

export const MatchHistorySection = ({itemsPerPage}:any) => {
  const dispatch = useDispatch();
  const matchHistory = useSelector(selectMatchHistory);
  const summonerInfo = useSelector(selectSummonerInfo);
  const matchHistoryStatus = useSelector(selectMatchHistoryStatus);
  const lastMatchHistory = matchHistory[matchHistory.length - 1]
  const isLoading = matchHistoryStatus == 'loading'
  const isFailed = matchHistoryStatus == 'failed'

  const handleLoadMore = (event:any) => {
    if (isLoading) { return }
    dispatch(getMatchInfo({summonerName:summonerInfo.summonerName, endTime: lastMatchHistory.matchDateTimestamp, initialMatchHistory:matchHistory}))
  };
  return (
    <div>
        <table className="matchHistory">
            <tbody>
                <tr>
                <th className={styles.tableHeader}>Match Date</th>
                <th className={styles.tableHeader}>Game Type</th>
                <th className={styles.tableHeader}>Champion Played</th>
                <th className={styles.tableHeader}>Win</th>
                <th className={styles.tableHeader}>Kills</th>
                <th className={styles.tableHeader}>Deaths</th>
                <th className={styles.tableHeader}>Assists</th>
                <th className={styles.tableHeader}>Gold Earned</th>
                <th className={styles.tableHeader}>Vision Scored</th>
                </tr>
            {matchHistory &&
            matchHistory.map((item) => (
                <tr>
                <td className={styles.tableCell}>{item.matchDate}</td>
                <td className={styles.tableCell}>{item.gameType}</td>
                <td className={styles.tableCell}>{item.championPlayed}</td>
                <td className={styles.tableCell}>{item.didWin ? "Win": "Loss"}</td>
                <td className={styles.tableCell}>{item.kills}</td>
                <td className={styles.tableCell}>{item.deaths}</td>
                <td className={styles.tableCell}>{item.assists}</td>
                <td className={styles.tableCell}>{item.goldEarned}</td>
                <td className={styles.tableCell}>{item.visionScored}</td>
                </tr>
            ))}
            </tbody>
        </table>
        {
            isFailed && 
            <div className={styles.row}>
                <div className={styles.error}>There was an error loading match history</div>
            </div>
        }
        {
            isLoading && 
            <div className={styles.row}>
                <div className={styles.loader}></div>
            </div>
        }
        <div className={styles.row}>
            <button className={styles.loadButton} onClick={handleLoadMore}> Load More</button>
        </div>
    </div>
    
  );
};
