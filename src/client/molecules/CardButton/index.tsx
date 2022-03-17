import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  disabled: boolean;
  correct?: boolean;
  partial?: boolean;
  click: (card: poker.Card) => void;
};

const width = 40;
const height = 58;

export const CardButton: React.FC<Props> = ({
  card,
  disabled,
  correct,
  partial,
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
      {disabled && <Disabled />}
      {correct && <Correct />}
      {partial && <Partial />}
      <StyledCard card={card} width={width} height={height} />
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.7;
`;

const Disabled = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.absent};
`;

const Correct = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.correct};
`;

const Partial = styled(Overlay)`
  background-color: ${({ theme }) => theme.wordle.partial};
`;

const StyledCard = styled(Card)`
  max-width: ${width}px;
`;
