import React from "react";

import style from "./stisticBlock.module.css"

const Statistic = ({ statGood, statNeutral, statBad, statTotal, statPositive}) => {
  return (
    < div className = {style.statistic}>
    <h2 className = {style.statisticTitle}>Statistic</h2>
      <span className = {style.itemStatistic}>Good:{statGood}</span><br/>
      <span className = {style.itemStatistic}>Neutral:{statNeutral}</span><br/>
      <span className = {style.itemStatistic}>Bad:{statBad}</span><br/>
  <span className = {style.itemStatistic}>Total:{statTotal}</span><br/>
  <span className = {style.itemStatistic}>Positive feedback:{statPositive}%</span><br/>
    </div>
  );
};
export default Statistic;
