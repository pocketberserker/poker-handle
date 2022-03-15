import React from "react";
import styled from "@emotion/styled";

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  min-height: 40px;
  margin-top: auto;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
