import React from "react";
import styled from "@emotion/styled";
import { BoardCard } from "../BoardCard";
import { InputState } from "../../state";
import * as poker from "../../../poker";

type AnswerProps = {
  row: number;
  cards: InputState[];
};

const Answer: React.FC<AnswerProps> = ({ cards, row }) => (
  <AnswerItems>
    {cards.map((state, i) => (
      <BoardCard
        key={
          state.kind === "blank"
            ? `blank-${row}-${i}`
            : poker.stringify(state.card)
        }
        state={state}
      />
    ))}
  </AnswerItems>
);

const AnswerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type BoardProps = {
  inputs: InputState[][];
};

export const Board: React.FC<BoardProps> = ({ inputs }) => {
  return (
    <Container>
      {inputs.map((input, i) => {
        const key = input
          .map((state) =>
            state.kind === "blank" ? "" : poker.stringify(state.card)
          )
          .join(" ");
        return (
          <Answer
            key={key === "    " ? `blank-${i}` : key}
            cards={input}
            row={i}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
