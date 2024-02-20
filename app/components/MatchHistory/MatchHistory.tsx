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
} from "@/lib/redux";
import styles from "./matchHistory.module.css";

export const MatchHistorySection = ({itemsPerPage}:any) => {
  const dispatch = useDispatch();
  const matchHistory = useSelector(selectMatchHistory);
  const summonerInfo = useSelector(selectSummonerInfo);
  const lastMatchHistory = matchHistory[matchHistory.length - 1]

  const handleLoadMore = (event:any) => {
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
        <button onClick={handleLoadMore}> Load More</button>
    </div>
    
  );
};
