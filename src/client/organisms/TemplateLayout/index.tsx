import React from "react";
import styled from "@emotion/styled";
import { Footer } from "../Footer";

type Props = {
  children: React.ReactNode;
  AppBar: React.ReactNode;
};

export const TemplateLayout: React.FC<Props> = ({ children, AppBar }) => {
  return (
    <Wrapper>
      {AppBar}
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
