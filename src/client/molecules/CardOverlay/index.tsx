import React from "react";
import styled from "@emotion/styled";

export const AbsentOverlay: React.FC = () => {
  return <Absent />;
};

export const CorrectOverlay: React.FC = () => {
  return <Correct />;
};

export const PartialOverlay: React.FC = () => {
  return <Partial />;
};

export const PartialRankOverlay: React.FC = () => {
  return <PartialRank />;
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
