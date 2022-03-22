import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { useAnimation } from "../../hooks/Animation";
import { CardOverlay } from "../CardOverlay";
import { Card } from "../../molecules/Card";
import { Guess } from "../../guess";
import { reverseDurationMs, shakeDurationMs } from "../../constants/meta";

type Props = {
  guess: Guess;
  row: number;
  index: number;
};

const width = 40;
const height = 58;

export const BoardCard: React.FC<Props> = ({ guess, row, index }) => {
  const { reverseIndex, shakeIndex } = useAnimation();
  const [reversed, setReversed] = useState(false);
  const [opened, setOpened] = useState(false);
  const [shaked, setShaked] = useState(false);

  useEffect(() => {
    if (reverseIndex === row) {
      setTimeout(() => {
        setReversed(true);
        setTimeout(() => setOpened(true), reverseDurationMs / 2);
      }, index * 160);
    }
  }, [reverseIndex, index]);

  useEffect(() => {
    setShaked(shakeIndex === row);
  }, [shakeIndex, row]);

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

    if (opened && guess.kind !== "entered") {
      overlay = <CardOverlay kind={guess.kind} />;
    }
  }

  return (
    <Wrapper
      blank={guess.kind === "blank"}
      reversed={reversed}
      opened={opened}
      shaked={shaked}
    >
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

const shake = keyframes`
  8%, 41% {
    transform: translateX(-4px);
  }
  25%, 58% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-2px);
  }
  92% {
    transform: translateX(2px);
  }
  0%, 100% {
    transform: translateX(0);
  }
`;

const shakeAnimation = css`
  animation: ${shakeDurationMs / 1000}s linear ${shake} forwards;
`;

type WrapperProps = {
  reversed: boolean;
  opened: boolean;
  blank: boolean;
  shaked: boolean;
};

const Wrapper = styled.div<WrapperProps>`
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
  ${({ shaked }) => shaked && shakeAnimation}
`;
