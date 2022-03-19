import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";

type Props = {
  card: poker.Card;
  width: number;
  height: number;
  reversed?: boolean;
  className?: string;
};

const toLabel = (suit: poker.Suit): string => {
  switch (suit) {
    case "C":
      return "♣";
    case "D":
      return "♦";
    case "H":
      return "♥";
    case "S":
      return "♠";
  }
};

export const Card: React.FC<Props> = ({
  card,
  width,
  height,
  reversed,
  className,
}) => {
  return (
    <Frame className={className} reversed={reversed} style={{ width, height }}>
      <Rank reversed={reversed}>{card.rank}</Rank>
      <Suit reversed={reversed}>{toLabel(card.suit)}</Suit>
    </Frame>
  );
};

const Rank = styled.span<{ reversed?: boolean }>`
  color: ${({ reversed, theme }) =>
    reversed ? theme.extras.white : theme.extras.black};
  z-index: ${({ reversed }) => (reversed ? 1 : 0)};
`;

const Suit = styled(Rank)``;

const Frame = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.extras.white};
  border: ${({ reversed }) => (reversed ? "0" : "1px solid")};
  border-radius: 4px;
`;
