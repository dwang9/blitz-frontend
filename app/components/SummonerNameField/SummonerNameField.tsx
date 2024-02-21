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
  selectSummonerInfoStatus,
  matchHistorySlice,
} from "@/lib/redux";
import styles from "./summonerName.module.css";

export const SummonerNameField = () => {
  const dispatch = useDispatch();
  const summonerInfo = useSelector(selectSummonerInfo);
  const [summonerName, setSummonerName] = useState("");
  const matchHistory = useSelector(selectMatchHistory);
  const summonerInfoStatus = useSelector(selectSummonerInfoStatus);
  const isFailed = summonerInfoStatus == 'failed'

  const handleSummonerNameChange = (event:any) => {
    setSummonerName(event.target.value);
  };
  const handleSummonerInfoSearch = () => {
    dispatch(matchHistorySlice.actions.setMatchHistory([]))
    dispatch(summonerInfoSlice.actions.setSummonerInfo({
      id:"",
      summonerName:"",
      profileIcon:"",
      rank:"",
      summonerLevel:0,
    }))
    dispatch(getSummonerInfo(summonerName))
    dispatch(getMatchInfo({summonerName, endTime: 0, initialMatchHistory:[]}))
  };
  return (
    <div>
      <div className={styles.row}>
        <input  className={styles.summonerNameInput} type="text" name="summonerName" placeholder="Search Summoner Name" onChange={handleSummonerNameChange} />
        <button
          className={styles.button}
          aria-label="SummonerName"
          onClick={handleSummonerInfoSearch}
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
      {
            isFailed && 
            <div className={styles.row}>
                <div className={styles.error}>There was an error loading summoner info</div>
            </div>
        }
    </div>
  );
};
