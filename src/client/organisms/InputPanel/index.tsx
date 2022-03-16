import React, { useState } from "react";
import styled from "@emotion/styled";
import { CardButton } from "../../molecules/CardButton";
import { BackspaceButton } from "../../molecules/BackspaceButton";
import { EnterButton } from "../../molecules/EnterButton";
import { SuitTabs } from "../SuitTabs";
import * as poker from "../../../poker";
import { wordle } from "../../constants/theme";

type SuitPanelProps = {
  suit: poker.Suit;
  index: number;
  value: number;
};

const SuitPanel: React.FC<SuitPanelProps> = ({ suit, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`suit-tabpanel-${index}`}
    aria-labelledby={`suit-tab-${index}`}
  >
    {value === index && (
      <Panel>
        {poker.ranks.map((rank) => {
          const card: poker.Card = { rank, suit };
          return <CardButton key={poker.stringify(card)} card={card} />;
        })}
      </Panel>
    )}
  </div>
);

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonPanel: React.FC = () => (
  <ButtonPanelContainer>
    <BackspaceButton />
    <EnterButton />
  </ButtonPanelContainer>
);

const ButtonPanelContainer = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
`;

type InputPanelProps = {
  className?: string;
};

export const InputPanel: React.FC<InputPanelProps> = ({ className }) => {
  const [tab, setTab] = useState(0);

  return (
    <Container className={className}>
      <TabWrapper>
        <SuitTabs value={tab} handleChange={setTab} />
      </TabWrapper>
      <SuitPanel suit="C" value={tab} index={0} />
      <SuitPanel suit="D" value={tab} index={1} />
      <SuitPanel suit="H" value={tab} index={2} />
      <SuitPanel suit="S" value={tab} index={3} />
      <ButtonPanel />
    </Container>
  );
};

const TabWrapper = styled.div`
  margin: 0 5px;
  background: ${wordle.correct};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
