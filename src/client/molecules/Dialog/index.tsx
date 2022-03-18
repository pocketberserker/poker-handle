import * as React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { CloseButton } from "../CloseButton";

type Props = {
  open: boolean;
  children: React.ReactNode;
  close: () => void;
};

export const Dialog: React.FC<Props> = ({ open, children, close }) => {
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <MuiDialog onClose={close} open={open}>
        <MobileWrapper>
          <ResizedCloseButton click={close} />
          {children}
        </MobileWrapper>
      </MuiDialog>
    );
  }

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
  min-width: 400px;
  position: relative;
`;

const MobileWrapper = styled(Wrapper)`
  min-width: 300px;
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
