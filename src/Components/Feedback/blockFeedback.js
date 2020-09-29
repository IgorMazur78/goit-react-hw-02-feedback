import React from "react";

import style from "./feedback.module.css"

const Feedback = ({onCounter}) => {
  return (
  <div className = {style.feedback}>
      <h2 className = {style.titleFeedback}>Please leave feedback</h2>
      <ul className = {style.feedbackList}>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {() => onCounter("good")}>Good</button>
        </li>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {() => onCounter("neutral")}>Neutral</button>
        </li>
        <li>
          <button className = {style.buttonFeedback} type ="button" onClick = {() => onCounter("bad")}>Bad</button>
        </li>
      </ul>
      </div>
   
  );
};
export default Feedback;
