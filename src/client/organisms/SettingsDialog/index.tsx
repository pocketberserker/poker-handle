import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography, Switch } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../hooks/Theme";
import { Dialog } from "../../molecules/Dialog";
import { useSettings } from "../../hooks/Settings";

type SettingBoxProps = {
  name: string;
  init: boolean;
  change: () => void;
};

const SettingBox: React.FC<SettingBoxProps> = ({ name, init, change }) => {
  const [checked, setChecked] = useState(init);

  const handleChange = (next: boolean) => {
    change();
    setChecked(next);
  };

  return (
    <Box>
      <BoxContent>
        <SettingTitle>{name}</SettingTitle>
        <Switch
          checked={checked}
          onChange={(e) => handleChange(e.target.checked)}
        />
      </BoxContent>
      <SettingDivider />
    </Box>
  );
};

const Box = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SettingTitle = styled.span`
  font-weight: bold;
`;

const SettingDivider = styled(Divider)`
  width: 100%;
`;

type SettingsProps = {};

export const SettingsDialog: React.FC<SettingsProps> = ({}) => {
  const { t } = useTranslation();
  const { settings, updateSettings } = useSettings();
  const { setColorMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = () => {
    const updated = settings.theme === "dark" ? "light" : "dark";
    updateSettings({
      theme: updated,
    });
    setColorMode(updated);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <SettingsIcon />
      </IconButton>
      <Dialog open={open} close={handleClose} fullScreen>
        <Title variant="h5">{t("settings.title")}</Title>
        <SettingBox
          name={t("settings.darkMode")}
          init={settings.theme === "dark"}
          change={handleChangeTheme}
        />
      </Dialog>
    </div>
  );
};

const Title = styled(Typography)`
  margin-top: 5px;
`;

const SettingsIcon = styled(Settings)``;
