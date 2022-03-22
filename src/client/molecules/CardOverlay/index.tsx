import React from "react";
import styled from "@emotion/styled";
import { Guess, Blank, Entered } from "../../guess";

type Props = {
  kind: Exclude<Exclude<Guess, Blank>, Entered>["kind"];
};

export const CardOverlay: React.FC<Props> = ({ kind }) => {
  if (kind === "correct") {
    return <Correct />;
  } else if (kind === "partial") {
    return <Partial />;
  } else if (kind === "partial-rank") {
    return <PartialRank />;
  }
  return <Absent />;
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.7;
  border-radius: 4px;
`;

const Absent = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.absent};
`;

const Correct = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.correct};
`;

const Partial = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.partial};
`;

const PartialRank = styled(Overlay)`
  background-color: ${({ theme }) => theme.extras.guess.rank};
`;
