import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";
import { Hand } from "../../molecules/Hand";

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
        <Hand key={poker.stringify(card)} card={card} />
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
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.primary};
`;
