import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";

import format from "date-fns/format";

import { maxTrials } from "../src/client/constants/meta";
import * as poker from "../src/client/generator";
import { Guess } from "../src/client/guess";
import { useSettings } from "../src/client/hooks/Settings";
import { ThemeContext } from "../src/client/hooks/Theme";
import { HomeTemplate } from "../src/client/templates/HomeTemplate";

const genGuesses = (): Guess[][] =>
  Array(maxTrials).fill(Array(5).fill({ kind: "blank" }));

const nowString = (): string => format(new Date(), "yyyy-MM-dd");

const alreadyAnswered = (guesses: Guess[][]): boolean => {
  const last = guesses[guesses.length - 1];
  const lastKind = last[last.length - 1].kind;
  return lastKind !== "blank" && lastKind !== "entered";
};

const Home: NextPage = () => {
  const router = useRouter();
  const { setColorMode } = useContext(ThemeContext);
  const { settings } = useSettings();
  const [guesses, setGuesses] = useState(genGuesses());
  const [board, setBoard] = useState<poker.Board | null>(null);

  const play = () => {
    const next =
      typeof router.query.seed === "string" ? router.query.seed : nowString();
    const opponents = router.query.opponents === "1" ? 1 : 3;
    setGuesses(genGuesses());
    setBoard(poker.generate(next, opponents));
  };

  useEffect(() => {
    if (router.isReady) {
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    setColorMode(settings.theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.theme]);

  if (!board) {
    return <div></div>;
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
