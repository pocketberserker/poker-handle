import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext, useMemo } from "react";

import { maxTrials, debugMode } from "../src/client/constants/meta";
import { nowString } from "../src/client/datetime";
import * as poker from "../src/client/generator";
import {
  Guess,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../src/client/guess";
import { useSettings } from "../src/client/hooks/Settings";
import { ThemeContext } from "../src/client/hooks/Theme";
import { StandardTemplate } from "../src/client/standard/PageTemplate";

const genGuesses = (): Guess[][] =>
  Array(maxTrials).fill(Array(5).fill({ kind: "blank" }));

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
  const [now, setNow] = useState(nowString());

  const isDebug = useMemo(
    () =>
      debugMode || (router.isReady && typeof router.query.seed === "string"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady]
  );

  const play = () => {
    const opponents = router.query.opponents === "1" ? 1 : 3;
    if (typeof router.query.seed === "string") {
      setGuesses(genGuesses());
      setBoard(poker.generate(router.query.seed, opponents));
    } else {
      const now = nowString();

      let newGuesses = genGuesses();
      if (isDebug === false) {
        newGuesses = loadFromLocalStorage()[now] ?? newGuesses;
      }

      setGuesses(newGuesses);
      setBoard(poker.generate(now, opponents));
      setNow(now);
    }
  };

  const save = (guesses: Guess[][]) => {
    saveToLocalStorage(now, guesses);
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
    <StandardTemplate
      board={board}
      init={guesses}
      alreadyAnswered={alreadyAnswered(guesses)}
      debug={isDebug}
      play={play}
      save={save}
    />
  );
};

export default Home;
