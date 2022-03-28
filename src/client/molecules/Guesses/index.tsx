import React from "react";
import styled from "@emotion/styled";
import { BoardCard } from "../BoardCard";
import { Guess } from "../../guess";
import * as poker from "../../../poker";

type Props = {
  row: number;
  guesses: Guess[];
  explanationMode?: boolean;
  className?: string;
};

export const Guesses: React.FC<Props> = ({
  guesses,
  row,
  explanationMode,
  className,
}) => (
  <Items className={className}>
    {guesses.map((guess, i) => (
      <BoardCard
        key={
          guess.kind === "blank"
            ? `blank-${row}-${i}`
            : poker.stringify(guess.card)
        }
        guess={guess}
        row={row}
        index={i}
        width={40}
        height={58}
        explanationMode={explanationMode}
      />
    ))}
  </Items>
);

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
