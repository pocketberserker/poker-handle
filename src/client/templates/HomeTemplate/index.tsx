import React from "react";
import styled from "@emotion/styled";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { Card } from "../../molecules/Card";
import * as poker from "../../../poker";

type Props = {};

export const HomeTemplate: React.FC<Props> = () => {
  return (
    <Layout>
      <Input>
        {poker.ranks.map((rank) => (
          <InputCard
            key={poker.stringify({ rank, suit: "C" })}
            rank={rank}
            suit="C"
          />
        ))}
      </Input>
    </Layout>
  );
};

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
