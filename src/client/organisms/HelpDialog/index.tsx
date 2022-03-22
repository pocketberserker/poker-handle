import React, { useState } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography } from "@mui/material";
import { Help } from "@mui/icons-material";
import { Dialog } from "../../molecules/Dialog";

type Props = {};

export const HelpDialog: React.FC<Props> = ({}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <HelpIcon />
      </IconButton>
      <Dialog open={open} close={handleClose} fullScreen>
        <Title variant="h5">How to play</Title>
        <ContentDivider />
        <Instruction>
          <p>Guess the cards in six tries.</p>
          <p>TODO: more explain</p>
        </Instruction>
      </Dialog>
    </div>
  );
};

const Title = styled(Typography)`
  margin-top: 5px;
`;

const ContentDivider = styled(Divider)`
  width: 80%;
  margin: 10px 0;
`;

const Instruction = styled.section`
  margin: 0 auto 0 40px;
`;

const HelpIcon = styled(Help)``;
