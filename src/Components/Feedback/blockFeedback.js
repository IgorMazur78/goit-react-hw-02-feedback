import React from "react";

import style from "./feedback.module.css"

const Feedback = ({onCounterGood,onCounterNeutral,onCounterBad}) => {
  return (
  <div className = {style.feedback}>
      <h2 className = {style.titleFeedback}>Please leave feedback</h2>
      <ul className = {style.feedbackList}>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {onCounterGood}>Good</button>
        </li>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {onCounterNeutral}>Neutral</button>
        </li>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {onCounterBad}>Bad</button>
        </li>
      </ul>
      </div>
   
  );
};
export default Feedback;
