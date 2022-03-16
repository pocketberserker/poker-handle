import React from "react";
import styled from "@emotion/styled";
import { BoardCard } from "../BoardCard";
import { Guess } from "../../guess";
import * as poker from "../../../poker";

type AnswerProps = {
  row: number;
  guesses: Guess[];
};

const Answer: React.FC<AnswerProps> = ({ guesses, row }) => (
  <AnswerItems>
    {guesses.map((guess, i) => (
      <BoardCard
        key={
          guess.kind === "blank"
            ? `blank-${row}-${i}`
            : poker.stringify(guess.card)
        }
        guess={guess}
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
  guesses: Guess[][];
};

export const Board: React.FC<BoardProps> = ({ guesses }) => {
  return (
    <Container>
      {guesses.map((row, i) => {
        const key = row
          .map((guess) =>
            guess.kind === "blank" ? "" : poker.stringify(guess.card)
          )
          .join(" ");
        return (
          <Answer
            key={key === "    " ? `blank-${i}` : key}
            guesses={row}
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
