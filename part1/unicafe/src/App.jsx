import { useState } from "react";

const StatisticList = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>
          {" "}
          {text} {value} %{" "}
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / (good + bad + neutral);
  const positive = (good / (good + bad + neutral)) * 100;
  if (all === 0) {
    return <div> No feedback given </div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticList text={"good"} value={good} />
          <StatisticList text={"neutral"} value={neutral} />
          <StatisticList text={"bad"} value={bad} />
          <StatisticList text={"all"} value={all} />
          <StatisticList text={"average"} value={average} />
          <StatisticList text={"positive"} value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.click}>{props.but}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        click={() => {
          setGood(good + 1);
        }}
        but="good"
      />
      <Button
        click={() => {
          setNeutral(neutral + 1);
        }}
        but="neutral"
      />
      <Button
        click={() => {
          setBad(bad + 1);
        }}
        but="bad"
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default App;
