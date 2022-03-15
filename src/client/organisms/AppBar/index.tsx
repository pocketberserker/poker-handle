import React from "react";
import { AppBar as BaseAppBar, Toolbar, Typography } from "@mui/material";
import { appName } from "../../constants/meta";

type Props = {};

export const AppBar: React.FC<Props> = () => {
  return (
    <BaseAppBar position="relative">
      <Toolbar>
        <Typography variant="h4">{appName}</Typography>
      </Toolbar>
    </BaseAppBar>
  );
};
