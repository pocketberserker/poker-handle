import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

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

const alreadyAnswered = (guesses: Guess[][]): boolean => {
  const last = guesses[guesses.length - 1];
  const lastKind = last[last.length - 1].kind;
  return lastKind !== "blank" && lastKind !== "entered";
};

const Home: NextPage = () => {
  const router = useRouter();
  const [guesses, setGuesses] = useState(genGuesses());
  const [board, setBoard] = useState<poker.Board | null>(null);

  const play = () => {
    const next =
      typeof router.query.seed === "string" ? router.query.seed : nowString();
    setGuesses(genGuesses());
    setBoard(poker.generate(next));
  };

  useEffect(() => {
    if (router.isReady) {
      play();
    }
  }, [router.isReady]);

  if (!board) {
    return null;
  }

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
