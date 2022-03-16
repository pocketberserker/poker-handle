import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";
import { Card } from "../../molecules/Card";

type Props = {
  name: string;
  cards: poker.Card[];
  className?: string;
};

export const Hands: React.FC<Props> = ({ name, cards, className }) => {
  return (
    <Area className={className}>
      <Name>{name}</Name>
      {cards.map((card) => (
        <InputCard key={poker.stringify(card)} card={card} />
      ))}
    </Area>
  );
};

const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  margin-top: 20px;
`;

const InputCard = styled(Card)`
  margin: 10px 20px;
  max-width: 60px;
`;
