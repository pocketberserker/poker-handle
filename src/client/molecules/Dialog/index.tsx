import * as React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import styled from "@emotion/styled";
import { CloseButton } from "../CloseButton";

type Props = {
  open: boolean;
  children: React.ReactNode;
  close: () => void;
};

export const Dialog: React.FC<Props> = ({ open, children, close }) => {
  return (
    <MuiDialog onClose={close} open={open}>
      <Wrapper>
        <ResizedCloseButton click={close} />
        {children}
      </Wrapper>
    </MuiDialog>
  );
};

const Wrapper = styled.div`
  width: 400px;
  position: relative;
`;

const ResizedCloseButton = styled(CloseButton)`
  min-width: 24px;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 1500;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? theme.extras.black : theme.extras.white};
`;
