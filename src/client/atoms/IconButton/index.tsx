import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { wordle } from "../../constants/theme";

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
  background: ${wordle.correct};
  color: ${wordle.correct};

  &:hover {
    background: ${wordle.correct};
  }
`;
