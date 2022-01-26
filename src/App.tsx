import React, { useState } from "react";
import rock from "./img/rock.png";
import paper from "./img/paper.png";
import scissors from "./img/scissors.png";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import Loading from "./components/Loading/Loading";
import Image from "./components/Image/Image";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const choices = [ROCK, PAPER, SCISSORS];

const winConditionRock = () => SCISSORS;
const winConditionPaper = () => ROCK;
const winConditionScissors = () => PAPER;

const getChoiceImage = (choice: string) => {
  if (choice === ROCK) return rock;
  if (choice === PAPER) return paper;
  else return scissors;
};

const getWinCondition = (userChoice: string) => {
  if (userChoice === ROCK) return winConditionRock();
  if (userChoice === PAPER) return winConditionPaper();
  else return winConditionScissors();
};

const App = () => {
  const [userChoice, setUserChoice] = useState<string>();
  const [pcChoice, setPcChoice] = useState<string>();
  const [result, setResult] = useState<"win" | "lose" | "draw">();

  const hasUserChosen = userChoice !== undefined;
  const hasPcChosen = pcChoice !== undefined;

  if (!result && hasUserChosen) {
    if (userChoice === pcChoice) setResult("draw");
    else setResult(getWinCondition(userChoice) === pcChoice ? "win" : "lose");
  }

  const useChoiceComponents = (
    <>
      <Button img={rock} onClick={() => userSelect(ROCK)} />
      <Button img={paper} onClick={() => userSelect(PAPER)} />
      <Button img={scissors} onClick={() => userSelect(SCISSORS)} />
    </>
  );

  const userSelect = (choice: string) => {
    setUserChoice(choice);
    setPcChoice(getRandomChoice());
  };

  const getRandomChoice = () => {
    const index = Math.floor(Math.random() * choices.length);

    return choices[index];
  };

  const reset = () => {
    setUserChoice(undefined);
    setPcChoice(undefined);
    setResult(undefined);
  };

  const statusComponent = (
    <>
      {result === "draw" ? (
        <p className={classes.draw}>Draw</p>
      ) : result === "win" ? (
        <p className={classes.win}>Win</p>
      ) : (
        <p className={classes.lose}>Lose</p>
      )}
      <Button className={classes.tryAgainButton} onClick={reset}>
        Try again
      </Button>
    </>
  );

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <p>Play Rock Paper Scissors</p>
        <div className={classes.field}>
          <div className={classes.user}>
            {hasUserChosen ? (
              <Image src={getChoiceImage(userChoice)} className={classes.img} />
            ) : (
              useChoiceComponents
            )}
          </div>
          <div className={classes.result}>
            {hasUserChosen ? (
              statusComponent
            ) : (
              <p>Waiting for user to select...</p>
            )}
          </div>
          <div className={classes.pc}>
            {hasUserChosen && hasPcChosen ? (
              <Image src={getChoiceImage(pcChoice)} className={classes.img} />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
