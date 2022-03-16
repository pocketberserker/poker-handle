import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import { wordle } from "../../constants/theme";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  disabled: boolean;
  click: (card: poker.Card) => void;
};

const width = 40;
const height = 58;

export const CardButton: React.FC<Props> = ({ card, disabled, click }) => {
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
      <StyledCard card={card} width={width} height={height} />
    </Button>
  );
};

const Button = styled.div`
  width: ${width}px;
  height: ${height}px;
  margin: 5px 2px;
  position: relative;
`;

const Disabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.7;
  background-color: ${wordle.absent};
`;

const StyledCard = styled(Card)`
  max-width: ${width}px;
`;
