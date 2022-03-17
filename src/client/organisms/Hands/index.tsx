import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";
import { Hand } from "../../molecules/Hand";

type Props = {
  name: string;
  cards: poker.Card[];
  category?: poker.Category;
  className?: string;
};

export const Hands: React.FC<Props> = ({
  name,
  cards,
  category,
  className,
}) => {
  return (
    <Area className={className}>
      <Name>{name}</Name>
      {cards.map((card) => (
        <Hand key={poker.stringify(card)} card={card} />
      ))}
      <Category>{category ?? "?"}</Category>
    </Area>
  );
};

const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Name = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Category = styled.div`
  margin-top: 5px;
  max-width: 60px;
  height: 60px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;
