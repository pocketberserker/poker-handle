import React from "react";
import { Close } from "@mui/icons-material";
import styled from "@emotion/styled";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  click: () => void;
  className?: string;
};

export const CloseButton: React.FC<Props> = ({ click, className }) => {
  return (
    <IconButton className={className} click={click}>
      <CloseIcon />
    </IconButton>
  );
};

const CloseIcon = styled(Close)`
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#000" : "#ffffff"};
`;
