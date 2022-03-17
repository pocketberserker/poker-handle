import type { NextPage } from "next";
import React, { useState } from "react";

import { maxTrials } from "../src/client/constants/meta";
import * as poker from "../src/client/generator";
import { Guess } from "../src/client/guess";
import { HomeTemplate } from "../src/client/templates/HomeTemplate";

const genGuesses = (): Guess[][] =>
  Array(maxTrials).fill(Array(5).fill({ kind: "blank" }));

const nowString = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
};

const genBoard = (seed: string): poker.Board => poker.generate(seed);

const alreadyAnswered = (guesses: Guess[][]): boolean => {
  const last = guesses[guesses.length - 1];
  const lastKind = last[last.length - 1].kind;
  return lastKind !== "blank" && lastKind !== "entered";
};

const Home: NextPage = () => {
  const [guesses, setGuesses] = useState(genGuesses());
  const [board, setBoard] = useState(genBoard(nowString()));

  const play = () => {
    setGuesses(genGuesses());
    setBoard(genBoard(nowString()));
  };

  return (
    <HomeTemplate
      board={board}
      init={guesses}
      alreadyAnswered={alreadyAnswered(guesses)}
      play={play}
    />
  );
};

export default Home;
