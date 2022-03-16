import React from "react";
import styled from "@emotion/styled";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { Hands } from "../../organisms/Hands";
import { InputPanel } from "../../organisms/InputPanel";
import { Board } from "../../generator";

type Props = {
  board: Board;
};

export const HomeTemplate: React.FC<Props> = ({ board }) => {
  return (
    <Layout>
      <Board>
        <Hands name="you" cards={board.player} />
        <Hands name="opponent" cards={board.opponent} />
      </Board>
      <Input />
    </Layout>
  );
};

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled(InputPanel)`
  margin-top: 20px;
  width: 400px;
`;
