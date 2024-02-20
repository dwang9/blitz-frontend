"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import styles from "./home.module.css";
import { SummonerNameField } from "../SummonerNameField/SummonerNameField";
import { MatchHistorySection } from "../MatchHistory/MatchHistory";

export const Home = () => {

  return (
    <div>
        <SummonerNameField />
        <MatchHistorySection 
          itemsPerPage={20}
          />
    </div>
  );
};
