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
  hands: poker.Card[];
  handleSelect: (card: poker.Card) => void;
};

const SuitPanel: React.FC<SuitPanelProps> = ({
  suit,
  value,
  index,
  hands,
  handleSelect,
}) => (
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
          return (
            <CardButton
              key={poker.stringify(card)}
              card={card}
              click={(c) => handleSelect(c)}
              disabled={
                hands.findIndex((c) => poker.equalsCard(c, card)) !== -1
              }
            />
          );
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

type ButtonPanelProps = {
  handleEnter: () => void;
  handleBackspace: () => void;
};

const ButtonPanel: React.FC<ButtonPanelProps> = ({
  handleEnter,
  handleBackspace,
}) => (
  <ButtonPanelContainer>
    <BackspaceButton click={handleBackspace} />
    <EnterButton click={handleEnter} />
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
  hands: poker.Card[];
  handleSelect: (card: poker.Card) => void;
  handleEnter: () => void;
  handleBackspace: () => void;
  className?: string;
};

export const InputPanel: React.FC<InputPanelProps> = ({
  hands,
  handleSelect,
  handleEnter,
  handleBackspace,
  className,
}) => {
  const [tab, setTab] = useState(0);

  return (
    <Container className={className}>
      <TabWrapper>
        <SuitTabs value={tab} handleChange={setTab} />
      </TabWrapper>
      <SuitPanel
        suit="C"
        value={tab}
        index={0}
        hands={hands}
        handleSelect={handleSelect}
      />
      <SuitPanel
        suit="D"
        value={tab}
        index={1}
        hands={hands}
        handleSelect={handleSelect}
      />
      <SuitPanel
        suit="H"
        value={tab}
        index={2}
        hands={hands}
        handleSelect={handleSelect}
      />
      <SuitPanel
        suit="S"
        value={tab}
        index={3}
        hands={hands}
        handleSelect={handleSelect}
      />
      <ButtonPanel
        handleEnter={handleEnter}
        handleBackspace={handleBackspace}
      />
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
