import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  small?: boolean;
};

export const Hand: React.FC<Props> = ({ card, small }) => {
  if (small) {
    return <SmallStyledCard card={card} width={40} height={58} />;
  }

  return <StyledCard card={card} width={58} height={88} />;
};

const StyledCard = styled(Card)`
  margin: 10px 5px;
  max-width: 60px;
`;

const SmallStyledCard = styled(StyledCard)`
  margin: 5px 5px;
`;
