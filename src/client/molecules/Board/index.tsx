import React from "react";
import styled from "@emotion/styled";
import { Guesses } from "../../molecules/Guesses";
import { Guess } from "../../guess";
import * as poker from "../../../poker";

type Props = {
  guesses: Guess[][];
  initialAnsweredRow: number;
};

export const Board: React.FC<Props> = ({ guesses, initialAnsweredRow }) => {
  return (
    <Container>
      {guesses.map((row, i) => {
        const key = row
          .map((guess) =>
            guess.kind === "blank" ? "" : poker.stringify(guess.card)
          )
          .join(" ");
        return (
          <Guesses
            key={key === "    " ? `blank-${i}` : key}
            guesses={row}
            row={i}
            immediately={i <= initialAnsweredRow}
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
