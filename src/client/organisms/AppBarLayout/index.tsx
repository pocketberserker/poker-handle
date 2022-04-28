import React from "react";
import styled from "@emotion/styled";
import { AppBar as BaseAppBar, Box, Toolbar, Typography } from "@mui/material";
import { StatsDialog } from "../StatsDialog";
import { SettingsDialog } from "../SettingsDialog";

type Props = {
  appName: string;
  help: React.ReactNode;
};

export const AppBarLayout: React.FC<Props> = ({ appName, help }) => {
  return (
    <BaseAppBar position="relative" color="inherit" elevation={1}>
      <CustomToolbar>
        {help}
        <Typography style={{ width: 36 }}> </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h5">{appName}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <StatsDialog />
        <SettingsDialog />
      </CustomToolbar>
    </BaseAppBar>
  );
};

const CustomToolbar = styled(Toolbar)`
  min-height: 48px;
`;
