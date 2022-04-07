import React from "react";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { Guess } from "../../guess";
import { GameBoard } from "../GameBoard";
import { Board } from "../../generator";

type Props = {
  board: Board;
  init: Guess[][];
  alreadyAnswered: boolean;
  debug: boolean;
  play: () => void;
  save: (guesses: Guess[][]) => void;
};

export const StandardTemplate: React.FC<Props> = ({
  board,
  init,
  alreadyAnswered,
  debug,
  play,
  save,
}) => {
  return (
    <Layout>
      <GameBoard
        board={board}
        init={init}
        alreadyAnswered={alreadyAnswered}
        debug={debug}
        play={play}
        save={save}
      />
    </Layout>
  );
};
