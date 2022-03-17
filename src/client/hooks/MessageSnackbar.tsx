import React, { useState, createContext, useContext } from "react";
import styled from "@emotion/styled";
import { Snackbar } from "@mui/material";

export const MessageSnackbarContext = createContext<(message: string) => void>(
  () => {}
);

type Props = {
  children: React.ReactNode;
};

export const MessageSnackbarProvider: React.FC<Props> = ({ children }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = (
    _event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <MessageSnackbarContext.Provider value={handleOpen}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
      </Snackbar>
      {children}
    </MessageSnackbarContext.Provider>
  );
};

const MessageContainer = styled.div`
  min-width: 288px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? theme.extras.black : theme.extras.white};
`;

const Message = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? theme.extras.white : theme.extras.black};
`;

export const useMessage = () => {
  const showMessage = useContext(MessageSnackbarContext);
  return {
    showMessage,
  };
};
