import React from "react";
import { Backspace } from "@mui/icons-material";
import styled from "@emotion/styled";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  click: () => void;
  className?: string;
};

export const BackspaceButton: React.FC<Props> = ({ click, className }) => {
  return (
    <IconButton className={className} click={click}>
      <BackspaceIcon />
    </IconButton>
  );
};

const BackspaceIcon = styled(Backspace)`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
