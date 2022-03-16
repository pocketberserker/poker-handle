import React from "react";
import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  value: number;
  handleChange: (newValue: number) => void;
};

const a11yProps = (index: number) => {
  return {
    id: `suit-tab-${index}`,
    "aria-controls": `suit-tabpanel-${index}`,
  };
};

export const SuitTabs: React.FC<Props> = ({ value, handleChange }) => {
  const theme = useTheme();
  return (
    <Tabs
      value={value}
      TabIndicatorProps={{
        style: {
          backgroundColor: theme.wordle.partial,
        },
      }}
      onChange={(e, newValue) => handleChange(newValue)}
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
  );
};

const SuitTab = styled(Tab)`
  font-size: 20px;
  min-width: 50px;
`;
