import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Card } from "../../molecules/Card";
import { Guess } from "../../guess";

type Props = {
  guess: Guess;
};

const width = 40;
const height = 58;

export const BoardCard: React.FC<Props> = ({ guess }) => {
  const theme = useTheme();

  let image = <div />;
  let confirmed: string | undefined;
  if (guess.kind !== "blank") {
    image = <Card card={guess.card} width={width} height={height} />;

    if (guess.kind === "absent") {
      confirmed = theme.wordle.absent;
    } else if (guess.kind === "partial") {
      confirmed = theme.wordle.partial;
    } else if (guess.kind === "partial-rank") {
      confirmed = theme.extras.guess.rank;
    } else if (guess.kind === "correct") {
      confirmed = theme.wordle.correct;
    }
  }

  return (
    <Wrapper
      style={{
        border:
          guess.kind === "blank"
            ? `1.5px solid ${theme.wordle.border}`
            : undefined,
      }}
    >
      {confirmed && <Confirmed style={{ backgroundColor: confirmed }} />}
      {image}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4px;
  width: ${width}px;
  height: ${height}px;
  position: relative;
  border-radius: 4px;
`;

const Confirmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.7;
`;
