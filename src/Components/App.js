import React, { Component } from "react";

import Feedback from "../Components/Feedback/blockFeedback";
import Statistic from "../Components/Statistic/blockStatistic";
import Title from "../Components/Statistic/title";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  Counter = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral
   
  };

 
  

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (bad || neutral || good > 0)
      return (good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback
          onCounter={this.Counter}
          
        />
{this.countTotalFeedback() === 0 && 
                    <Title />}
          <Statistic
            statGood={good}
            statNeutral={neutral}
            statBad={bad}
            statTotal={this.countTotalFeedback()}
            statPositive={this.countPositiveFeedbackPercentage()}/>
            </div>
      
    );
  }
}
