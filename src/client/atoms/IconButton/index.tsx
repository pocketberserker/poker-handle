import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { wordle } from "../../constants/theme";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const IconButton: React.FC<Props> = ({ children, className }) => {
  return (
    <StyledButton className={className} disableRipple>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  margin: 5px 0;
  min-width: 50px;
  background: ${wordle.correct};
  color: ${wordle.correct};

  &:hover {
    background: ${wordle.correct};
  }
`;
