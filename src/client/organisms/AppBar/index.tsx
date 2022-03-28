import React from "react";
import styled from "@emotion/styled";
import { AppBar as BaseAppBar, Box, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HelpDialogJa, HelpDialogEn } from "../HelpDialog";
import { SettingsDialog } from "../SettingsDialog";

type Props = {
  appName: string;
};

export const AppBar: React.FC<Props> = ({ appName }) => {
  const { i18n } = useTranslation();

  return (
    <BaseAppBar position="relative" color="inherit" elevation={1}>
      <CustomToolbar>
        {i18n.resolvedLanguage === "ja" ? <HelpDialogJa /> : <HelpDialogEn />}
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
