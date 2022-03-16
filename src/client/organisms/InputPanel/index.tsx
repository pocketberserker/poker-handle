import React, { useState } from "react";
import { Tab, Tabs, Button } from "@mui/material";
import { Backspace, KeyboardReturn } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Card } from "../../atoms/Card";
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
          return (
            <InputCard
              key={poker.stringify(card)}
              card={card}
              width={40}
              height={58}
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

const InputCard = styled(Card)`
  max-width: 40px;
  margin: 5px 2px;
`;

const ButtonPanel: React.FC = () => (
  <ButtonPanelContainer>
    <IconButton disableRipple>
      <BackspaceIcon />
    </IconButton>
    <IconButton disableRipple>
      <EnterIcon />
    </IconButton>
  </ButtonPanelContainer>
);

const ButtonPanelContainer = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
`;

const IconButton = styled(Button)`
  margin: 5px 0;
  min-width: 50px;
  background: ${wordle.correct};
  color: ${wordle.correct};

  &:hover {
    background: ${wordle.correct};
  }
`;

const EnterIcon = styled(KeyboardReturn)`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const BackspaceIcon = styled(Backspace)`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

type InputPanelProps = {
  className?: string;
};

const a11yProps = (index: number) => {
  return {
    id: `suit-tab-${index}`,
    "aria-controls": `suit-tabpanel-${index}`,
  };
};

export const InputPanel: React.FC<InputPanelProps> = ({ className }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className={className}>
      <TabWrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          centered
          textColor="inherit"
          orientation="vertical"
        >
          <SuitTab label="♣" {...a11yProps(0)} />
          <SuitTab label="♦" {...a11yProps(1)} />
          <SuitTab label="♥" {...a11yProps(2)} />
          <SuitTab label="♠" {...a11yProps(3)} />
        </Tabs>
      </TabWrapper>
      <SuitPanel suit="C" value={value} index={0} />
      <SuitPanel suit="D" value={value} index={1} />
      <SuitPanel suit="H" value={value} index={2} />
      <SuitPanel suit="S" value={value} index={3} />
      <ButtonPanel />
    </Container>
  );
};

const TabWrapper = styled.div`
  margin: 0 5px;
  background: ${wordle.correct};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const SuitTab = styled(Tab)`
  font-size: 20px;
  min-width: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
