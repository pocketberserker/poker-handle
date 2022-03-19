import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import {
  AbsentOverlay,
  PartialOverlay,
  PartialRankOverlay,
  CorrectOverlay,
} from "../CardOverlay";
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
  let overlay = <div />;
  if (guess.kind !== "blank") {
    image = (
      <Card
        card={guess.card}
        width={width}
        height={height}
        reversed={guess.kind !== "entered"}
      />
    );

    if (guess.kind === "absent") {
      overlay = <AbsentOverlay />;
    } else if (guess.kind === "partial") {
      overlay = <PartialOverlay />;
    } else if (guess.kind === "partial-rank") {
      overlay = <PartialRankOverlay />;
    } else if (guess.kind === "correct") {
      overlay = <CorrectOverlay />;
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
      {overlay}
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
