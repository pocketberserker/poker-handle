import * as React from "react";
import { Dialog as MuiDialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { CloseButton } from "../CloseButton";

type Props = {
  open: boolean;
  children: React.ReactNode;
  fullScreen?: boolean;
  close: () => void;
};

export const Dialog: React.FC<Props> = ({
  open,
  children,
  fullScreen,
  close,
}) => {
  const { isMobile } = useMobile();

  if (fullScreen) {
    return (
      <MuiDialog
        PaperProps={{
          style: {
            alignItems: "center",
          },
        }}
        TransitionComponent={Transition}
        onClose={close}
        open={open}
        fullScreen
      >
        <FullScreenWrapper>
          <ResizedCloseButton click={close} />
          {children}
        </FullScreenWrapper>
      </MuiDialog>
    );
  }

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

const FullScreenWrapper = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
