import React, { useState } from "react";
import styled from "@emotion/styled";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { Hands } from "../../organisms/Hands";
import { Card } from "../../molecules/Card";
import * as poker from "../../../poker";
import { Board } from "../../generator";

type Props = {
  board: Board;
};

export const HomeTemplate: React.FC<Props> = ({ board }) => {
  return (
    <Layout>
      <Board>
        <Hands name="you" cards={board.player} />
        <Hands name="opponent" cards={board.opponent} />
      </Board>
      <Input>
        {poker.ranks.map((rank) => {
          const card: poker.Card = { rank, suit: "C" };
          return <InputCard key={poker.stringify(card)} card={card} />;
        })}
      </Input>
    </Layout>
  );
};

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputCard = styled(Card)`
  max-width: 40px;
  margin: 5px 2px;
`;

const Input = styled.div`
  margin-top: 20px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
