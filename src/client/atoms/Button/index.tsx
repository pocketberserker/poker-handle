import React from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  click: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<Props> = ({ click, children, className }) => {
  return (
    <StyledButton className={className} disableRipple onClick={click}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)`
  background: ${({ theme }) => theme.wordle.correct};
  color: ${({ theme }) => theme.extras.white};

  &:hover {
    background: ${({ theme }) => theme.wordle.correct};
  }
`;
