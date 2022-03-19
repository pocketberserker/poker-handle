import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import {
  AbsentOverlay,
  PartialOverlay,
  PartialRankOverlay,
  CorrectOverlay,
} from "../CardOverlay";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  disabled: boolean;
  correct?: boolean;
  partial?: boolean;
  partialRank?: boolean;
  click: (card: poker.Card) => void;
};

const width = 40;
const height = 58;

export const CardButton: React.FC<Props> = ({
  card,
  disabled,
  correct,
  partial,
  partialRank,
  click,
}) => {
  return (
    <Button
      onClick={() => {
        if (disabled) {
          return;
        }
        click(card);
      }}
    >
      {disabled && <AbsentOverlay />}
      {correct && <CorrectOverlay />}
      {partial && <PartialOverlay />}
      {partialRank && <PartialRankOverlay />}
      <StyledCard
        card={card}
        reversed={disabled || correct || partial || partialRank}
        width={width}
        height={height}
      />
    </Button>
  );
};

const Button = styled.div`
  width: ${width}px;
  height: ${height}px;
  margin: 5px 2px;
  position: relative;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  max-width: ${width}px;
`;
