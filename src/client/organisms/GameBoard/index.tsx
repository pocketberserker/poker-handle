import React from "react";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { Hands } from "../Hands";
import { Board } from "../../molecules/Board";
import { InputPanel } from "../../organisms/InputPanel";
import { Board as BoardModel } from "../../generator";
import { maxTryCount } from "../../constants/meta";

type Props = {
  board: BoardModel;
};

export const GameBoard: React.FC<Props> = ({ board }) => {
  const { isMobile } = useMobile();

  const inputs = Array(maxTryCount).fill(Array(5).fill({ kind: "blank" }));

  if (isMobile) {
    return (
      <>
        <MobileMainBoard>
          <Hands name="you" cards={board.player} />
          <Board inputs={inputs} />
          <Hands name="other" cards={board.opponent} />
        </MobileMainBoard>
        <MobileInput />
      </>
    );
  }

  return (
    <>
      <MainBoard>
        <Hands name="you" cards={board.player} />
        <Board inputs={inputs} />
        <Hands name="other" cards={board.opponent} />
      </MainBoard>
      <Input />
    </>
  );
};

const MainBoard = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileMainBoard = styled(MainBoard)`
  margin-top: 12px;
`;

const Input = styled(InputPanel)`
  margin-top: 40px;
  max-width: 400px;
`;

const MobileInput = styled(Input)`
  margin-top: 10px;
  width: 98%;
`;
