import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.click}>{props.but}</button>
    </>
  );
};
const Win = (props) => {
  let n = 0;
  let winner = " ";
  for (let i = 0; i < 8; i++) {
    if (props.Votes[i] >= n) {
      n = props.Votes[i];
      winner = props.anecdotes[i];
    }
  }
  console.log(winner, n);
  return (
    <>
      <p>{winner}</p> has {n} votes{" "}
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [Votes, setVotes] = useState(Array(8).fill(0));
  const Render = () => {
    setSelected(0);

    setSelected((n) => n + Math.floor(Math.random() * 8));
  };
  const Vote = () => {
    const NewVotes = { ...Votes };
    NewVotes[selected] += 1;
    setVotes(NewVotes);
  };

  return (
    <>
      {" "}
      <h2>Ancedote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {Votes[selected]} </p>
      <Button click={Vote} but="vote" />{" "}
      <Button click={Render} but="set anecode" />{" "}
      <h2>Ancedote with most votes</h2>
      <Win Votes={Votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
