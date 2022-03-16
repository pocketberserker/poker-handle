import React from "react";
import styled from "@emotion/styled";
import * as poker from "../../../poker";

type Props = {
  rank: poker.Rank;
  suit: poker.Suit;
  className?: string;
};

const getCardImageUrl = (rank: poker.Rank, suit: poker.Suit): string => {
  let n;
  switch (rank) {
    case "T":
      n = "10";
      break;
    case "J":
      n = "11";
      break;
    case "Q":
      n = "12";
      break;
    case "K":
      n = "13";
      break;
    case "A":
      n = "01";
      break;
    default:
      n = `0${rank}`;
      break;
  }

  let s = "";
  switch (suit) {
    case "C":
      s = "club";
      break;
    case "D":
      s = "diamond";
      break;
    case "H":
      s = "heart";
      break;
    case "S":
      s = "spade";
      break;
  }

  return `images/cards/card_${s}_${n}.png`;
};

export const Card: React.FC<Props> = ({ rank, suit, className }) => {
  return (
    <div className={className}>
      <Image
        src={getCardImageUrl(rank, suit)}
        alt={poker.stringify({ rank, suit })}
      />
    </div>
  );
};

const Image = styled.img`
  width: 100%;
`;
