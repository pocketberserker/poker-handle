import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  click: () => void;
  children: React.ReactNode;
  className?: string;
};

export const IconButton: React.FC<Props> = ({ click, children, className }) => {
  return (
    <StyledButton className={className} disableRipple onClick={click}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  margin: 5px 0;
  min-width: 50px;
  background: ${({ theme }) => theme.wordle.correct};
  color: ${({ theme }) => theme.wordle.correct};

  &:hover {
    background: ${({ theme }) => theme.wordle.correct};
  }
`;
