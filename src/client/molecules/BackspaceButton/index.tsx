import React from "react";
import { Backspace } from "@mui/icons-material";
import styled from "@emotion/styled";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  className?: string;
};

export const BackspaceButton: React.FC<Props> = ({ className }) => {
  return (
    <IconButton className={className}>
      <BackspaceIcon />
    </IconButton>
  );
};

const BackspaceIcon = styled(Backspace)`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
