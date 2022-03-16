import React from "react";
import styled from "@emotion/styled";
import { AppBar as BaseAppBar, Box, Toolbar, Typography } from "@mui/material";
import { appName } from "../../constants/meta";

type Props = {};

export const AppBar: React.FC<Props> = () => {
  return (
    <BaseAppBar position="relative">
      <CustomToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h5">{appName}</Typography>
        <Box sx={{ flexGrow: 1 }} />
      </CustomToolbar>
    </BaseAppBar>
  );
};

const CustomToolbar = styled(Toolbar)`
  min-height: 48px;
`;
