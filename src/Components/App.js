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

  // Counter = (type) => {
  //   this.setState((prevState) => {
  //     return {
  //     [type]: prevState[type] + 1,
  //     };
  //   });
  // };

  CounterGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };


  CounterNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  CounterBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral
   
  };

 
  

  countPositiveFeedbackPercentage = () => {
    if (this.state.bad || this.state.neutral || this.state.good > 0)
      return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback
          onCounterGood={this.CounterGood}
          onCounterNeutral={this.CounterNeutral}
          onCounterBad={this.CounterBad}
        />
        {this.countTotalFeedback() === 0 ? (
          <div>
          <Title />
          <Statistic
            statGood={good}
            statNeutral={neutral}
            statBad={bad}
            statTotal={this.countTotalFeedback()}
            statPositive={this.countPositiveFeedbackPercentage()}/>
            </div>
        ) : (
          <Statistic
            statGood={good}
            statNeutral={neutral}
            statBad={bad}
            statTotal={this.countTotalFeedback()}
            statPositive={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
