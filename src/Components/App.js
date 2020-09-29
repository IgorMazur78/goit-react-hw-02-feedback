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

  
  // CounterGood = () => {
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };


  // CounterNeutral = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // CounterBad = () => {
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
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
          // onCounterNeutral={this.Counter}
          // onCounterBad={this.Counter}
        />
{this.countTotalFeedback() === 0 && (
          <div>
          <Title />
          <Statistic
            statGood={good}
            statNeutral={neutral}
            statBad={bad}
            statTotal={this.countTotalFeedback()}
            statPositive={this.countPositiveFeedbackPercentage()}/>
            </div>
        )}
        {this.countTotalFeedback() !== 0 &&  
        <Statistic
        statGood={good}
        statNeutral={neutral}
        statBad={bad}
        statTotal={this.countTotalFeedback()}
        statPositive={this.countPositiveFeedbackPercentage()}
      />}

        
      </div>
    );
  }
}
