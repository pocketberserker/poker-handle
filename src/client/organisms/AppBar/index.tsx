import React from "react";
import styled from "@emotion/styled";
import { AppBar as BaseAppBar, Toolbar, Typography } from "@mui/material";
import { appName } from "../../constants/meta";

type Props = {};

export const AppBar: React.FC<Props> = () => {
  return (
    <BaseAppBar position="relative">
      <CustomToolbar>
        <Typography variant="h5">{appName}</Typography>
      </CustomToolbar>
    </BaseAppBar>
  );
};

const CustomToolbar = styled(Toolbar)`
  min-height: 48px;
`;
