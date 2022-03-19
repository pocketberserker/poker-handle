import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useAnimation } from "../../hooks/Animation";
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
  row: number;
  index: number;
};

const width = 40;
const height = 58;

const fps = 1000 / 60;

const appendAngle = 5;

export const BoardCard: React.FC<Props> = ({ guess, row, index }) => {
  const theme = useTheme();
  const { rotate } = useAnimation();
  const [rotating, setRotating] = useState(false);
  const [opened, setOpened] = useState(false);
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    const loopRotate = () => {
      setDeg((prev) => {
        const next = prev >= 180 ? prev : prev + appendAngle;
        if (next >= 90) {
          setOpened(true);
        }
        return next;
      });
      if (rotate === row) {
        setTimeout(loopRotate, fps);
      }
    };

    if (rotate === row) {
      setRotating(true);
      if (index == 0) {
        loopRotate();
      } else {
        setTimeout(loopRotate, index * 10 * fps);
      }
    }
  }, [rotate, index]);

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
    <Wrapper
      style={{
        border:
          guess.kind === "blank"
            ? `1.5px solid ${theme.wordle.border}`
            : undefined,
        transform: `rotate3d(0, 1, 0, ${
          opened ? (deg >= 180 ? 0 : 180 - deg) : deg
        }deg)`,
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
