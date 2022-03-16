import React from "react";
import styled from "@emotion/styled";
import { AppBar } from "../../molecules/AppBar";
import { Footer } from "../Footer";
import { appName } from "../../constants/meta";

type Props = {
  children: React.ReactNode;
};

export const TemplateLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <AppBar appName={appName} />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
`;
