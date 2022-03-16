import type { NextPage } from "next";

import { maxTrials } from "../src/client/constants/meta";
import * as poker from "../src/client/generator";
import { Guess } from "../src/client/guess";
import { HomeTemplate } from "../src/client/templates/HomeTemplate";

const Home: NextPage = () => {
  const now = new Date();
  const nowString = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const guesses: Guess[][] = Array(maxTrials).fill(
    Array(5).fill({ kind: "blank" })
  );

  const last = guesses[guesses.length - 1];
  const lastKind = last[last.length - 1].kind;
  const alreadyAnswered = lastKind !== "blank" && lastKind !== "entered";

  return (
    <HomeTemplate
      board={poker.generate(nowString)}
      init={guesses}
      alreadyAnswered={alreadyAnswered}
    />
  );
};

export default Home;
