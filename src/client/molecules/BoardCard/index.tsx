import React from "react";
import styled from "@emotion/styled";
import { Card } from "../../molecules/Card";
import { InputState } from "../../state";
import { wordle } from "../../constants/theme";

type Props = {
  state: InputState;
};

const width = 40;
const height = 58;

export const BoardCard: React.FC<Props> = ({ state }) => {
  let image = <div />;
  let confirmed: string | undefined;
  if (state.kind !== "blank") {
    image = <Card card={state.card} width={width} height={height} />;

    if (state.kind === "absent") {
      confirmed = wordle.absent;
    } else if (state.kind === "partial-match") {
      confirmed = wordle.partial;
    } else if (state.kind === "correct") {
      confirmed = wordle.correct;
    }
  }

  return (
    <Wrapper
      style={{
        border:
          state.kind === "blank" ? `1.5px solid ${wordle.border}` : undefined,
      }}
    >
      {confirmed && <Confirmed style={{ backgroundColor: confirmed }} />}
      {image}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4px;
  width: ${width}px;
  height: ${height}px;
  position: relative;
  border-radius: 4px;
`;

const Confirmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.7;
`;
