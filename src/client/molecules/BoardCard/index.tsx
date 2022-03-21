import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { useAnimation } from "../../hooks/Animation";
import {
  AbsentOverlay,
  PartialOverlay,
  PartialRankOverlay,
  CorrectOverlay,
} from "../CardOverlay";
import { Card } from "../../molecules/Card";
import { Guess } from "../../guess";
import { reverseDurationMs } from "../../constants/meta";

type Props = {
  guess: Guess;
  row: number;
  index: number;
};

const width = 40;
const height = 58;

export const BoardCard: React.FC<Props> = ({ guess, row, index }) => {
  const { reverseIndex } = useAnimation();
  const [reversed, setReversed] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (reverseIndex === row) {
      setTimeout(() => {
        setReversed(true);
        setTimeout(() => setOpened(true), reverseDurationMs / 2);
      }, index * 160);
    }
  }, [reverseIndex, index]);

  let image = <div />;
  let overlay = <div />;
  if (guess.kind !== "blank") {
    image = (
      <Card
        card={guess.card}
        width={width}
        height={height}
        reversed={opened && guess.kind !== "entered"}
      />
    );

    if (opened) {
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
  }

  return (
    <Wrapper blank={guess.kind === "blank"} reversed={reversed} opened={opened}>
      {overlay}
      {image}
    </Wrapper>
  );
};

const firstReverse = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0deg);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
`;

const secondReverse = keyframes`
  from {
    transform: rotate3d(0, 1, 0, -90deg);
  }

  to {
    transform: rotate3d(0, 1, 0, 0deg);
  }
`;

const firstReverseAnimation = css`
  animation: ${reverseDurationMs / 1000 / 2}s linear ${firstReverse} forwards;
`;

const secondReverseAnimation = css`
  animation: ${reverseDurationMs / 1000 / 2}s linear ${secondReverse} forwards;
`;

const Wrapper = styled.div<{
  reversed: boolean;
  opened: boolean;
  blank: boolean;
}>`
  margin: 4px;
  width: ${width}px;
  height: ${height}px;
  position: relative;
  border-radius: 4px;
  ${({ blank, theme }) =>
    blank ? `border: 1.5px solid ${theme.wordle.border};` : ""}
  ${({ reversed, opened }) =>
    reversed && opened === false && firstReverseAnimation}
  ${({ reversed, opened }) => reversed && opened && secondReverseAnimation}
`;
