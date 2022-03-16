import React from "react";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { Guess } from "../../guess";
import { GameBoard } from "../../organisms/GameBoard";
import { Board } from "../../generator";

type Props = {
  board: Board;
  init: Guess[][];
  alreadyAnswered: boolean;
};

export const HomeTemplate: React.FC<Props> = ({
  board,
  init,
  alreadyAnswered,
}) => {
  return (
    <Layout>
      <GameBoard board={board} init={init} alreadyAnswered={alreadyAnswered} />
    </Layout>
  );
};
