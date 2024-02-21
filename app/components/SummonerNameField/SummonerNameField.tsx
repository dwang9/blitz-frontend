"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  summonerInfoSlice,
  useSelector,
  useDispatch,
  getSummonerInfo,
  getMatchInfo,
  selectMatchHistory,
  selectSummonerInfo,
} from "@/lib/redux";
import styles from "./summonerName.module.css";

export const SummonerNameField = () => {
  const dispatch = useDispatch();
  const summonerInfo = useSelector(selectSummonerInfo);
  const [summonerName, setSummonerName] = useState("");
  const matchHistory = useSelector(selectMatchHistory);

  const handleSummonerNameChange = (event:any) => {
    setSummonerName(event.target.value);
  };
  const handleSummonerInfoConfirm = () => {
    dispatch(getSummonerInfo(summonerName))
    dispatch(getMatchInfo({summonerName, endTime: 0, initialMatchHistory:matchHistory}))
  };
  return (
    <div>
      <div className={styles.row}>
        <input  className={styles.summonerNameInput} type="text" name="summonerName" placeholder="Search Summoner Name" onChange={handleSummonerNameChange} />
        <button
          className={styles.button}
          aria-label="SummonerName"
          onClick={handleSummonerInfoConfirm}
        >
          Search
        </button>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeader}></th>
            <th className={styles.tableHeader}>Summoner Name</th>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Rank</th>
            <th className={styles.tableHeader}>Summoner Level</th>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>
              {
                summonerInfo.profileIcon && 
                <img className={styles.profile_pic} src={summonerInfo.profileIcon} />
              }
            </td>
            <td className={styles.summoner_name + ' ' + styles.tableCell}>{summonerInfo.summonerName}</td>
            <td className={styles.value + ' ' + styles.tableCell}>{summonerInfo.id}</td>
            <td className={styles.value + ' ' + styles.tableCell}>{summonerInfo.rank}</td>
            <td className={styles.value + ' ' + styles.tableCell}>{summonerInfo.summonerLevel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
