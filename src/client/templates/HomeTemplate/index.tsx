import React from "react";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { GameBoard } from "../../organisms/GameBoard";
import { Board } from "../../generator";

type Props = {
  board: Board;
};

export const HomeTemplate: React.FC<Props> = ({ board }) => {
  return (
    <Layout>
      <GameBoard board={board} />
    </Layout>
  );
};
