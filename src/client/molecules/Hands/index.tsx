import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";
import { Hand } from "../Hand";

export type Props = {
  name: string;
  cards: poker.Card[];
  category?: poker.Category;
  small?: boolean;
  className?: string;
};

export const Hands: React.FC<Props> = ({
  name,
  cards,
  category,
  small,
  className,
}) => (
  <Container className={className}>
    <Name>{name}</Name>
    {cards.map((card) => (
      <Hand key={poker.stringify(card)} card={card} small={small} />
    ))}
    {small ? (
      <SmallCategory>{category ?? "?"}</SmallCategory>
    ) : (
      <Category>{category ?? "?"}</Category>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Name = styled.span`
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

const SmallCategory = styled(Category)`
  margin-top: 0;
  max-width: 40px;
  height: 32px;
  font-weight: bold;
  font-size: 10px;
`;
