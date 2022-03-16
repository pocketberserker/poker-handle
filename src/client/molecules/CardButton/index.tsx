import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
};

export const CardButton: React.FC<Props> = ({ card }) => {
  return <StyledCard card={card} width={40} height={58} />;
};

const StyledCard = styled(Card)`
  max-width: 40px;
  margin: 5px 2px;
`;
