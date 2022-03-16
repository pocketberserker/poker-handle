import React from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
};

export const Hand: React.FC<Props> = ({ card }) => {
  return <StyledCard card={card} width={60} height={88} />;
};

const StyledCard = styled(Card)`
  margin: 10px 5px;
  max-width: 60px;
`;
