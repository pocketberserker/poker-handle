import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  click: (card: poker.Card) => void;
};

export const CardButton: React.FC<Props> = ({ card, click }) => {
  return (
    <div onClick={() => click(card)}>
      <StyledCard card={card} width={40} height={58} />
    </div>
  );
};

const StyledCard = styled(Card)`
  max-width: 40px;
  margin: 5px 2px;
`;
