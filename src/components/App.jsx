import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions }  from "./FeedbackOptions/FeedbackOptions.jsx";
import { render } from "react-dom";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
}
updateCount = state => {
  this.setState(prevState => ({ [state]: prevState[state] + 1 }));
}

countTotalFeedback = () =>
  Object.values(this.state).reduce((acc, value) => acc + value, 0);

countPositiveFeedbackPercentage = () => {
  return this.countTotalFeedback()
    ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    : '0';
};

render() {
  const { good, neutral, bad } = this.state;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options = {this.state}
          onLeaveFeedback = {this.updateCount}/>
      </Section>

      {

      }
    </>
  )
}