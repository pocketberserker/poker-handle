import React from "react";
import { KeyboardReturn } from "@mui/icons-material";
import styled from "@emotion/styled";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  className?: string;
};

export const EnterButton: React.FC<Props> = ({ className }) => {
  return (
    <IconButton className={className}>
      <EnterIcon />
    </IconButton>
  );
};

const EnterIcon = styled(KeyboardReturn)`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
