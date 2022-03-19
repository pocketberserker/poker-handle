import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";
import { Hands } from "../../molecules/Hands";

type Props = {
  members: {
    name: string;
    cards: poker.Card[];
    category?: poker.Category;
  }[];
  small?: boolean;
  className?: string;
};

export const HandsArea: React.FC<Props> = ({ members, small, className }) => (
  <Area className={className}>
    {members.map(({ name, cards, category }) => (
      <Hands key={name} name={name} cards={cards} category={category} small />
    ))}
  </Area>
);

const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
