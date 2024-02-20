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

  const handleSummonerNameChange = (event) => {
    setSummonerName(event.target.value);
  };
  const handleSummonerInfoConfirm = () => {
    dispatch(getSummonerInfo(summonerName))
    dispatch(getMatchInfo({summonerName, endTime: 0, initialMatchHistory:matchHistory}))
  };
  return (
    <div>
      <div className={styles.row}>
        <input type="text" name="summonerName" onChange={handleSummonerNameChange} />
        <button
          className={styles.button}
          aria-label="SummonerName"
          onClick={handleSummonerInfoConfirm}
        >
          Confirm
        </button>
      </div>
      <div className={styles.row}>
        <img className={styles.profile_pic} src={summonerInfo.profileIcon} />
        <span className={styles.summoner_name}>{summonerInfo.summonerName}</span>
        <span className={styles.value}>{summonerInfo.id}</span>
        <span className={styles.value}>{summonerInfo.rank}</span>
        <span className={styles.value}>{summonerInfo.summonerLevel}</span>
      </div>
    </div>
  );
};
