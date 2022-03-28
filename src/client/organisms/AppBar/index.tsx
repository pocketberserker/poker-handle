import React from "react";
import styled from "@emotion/styled";
import { AppBar as BaseAppBar, Box, Toolbar, Typography } from "@mui/material";
import { HelpDialogEn } from "../HelpDialog";
import { SettingsDialog } from "../SettingsDialog";

type Props = {
  appName: string;
};

export const AppBar: React.FC<Props> = ({ appName }) => {
  return (
    <BaseAppBar position="relative" color="inherit" elevation={1}>
      <CustomToolbar>
        <HelpDialogEn />
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h5">{appName}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <SettingsDialog />
      </CustomToolbar>
    </BaseAppBar>
  );
};

const CustomToolbar = styled(Toolbar)`
  min-height: 48px;
`;
