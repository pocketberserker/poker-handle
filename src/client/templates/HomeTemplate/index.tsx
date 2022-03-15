import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { TemplateLayout as Layout } from "../../organisms/TemplateLayout";
import { appName } from "../../constants/meta";

type Props = {};

export const HomeTemplate: React.FC<Props> = () => {
  return (
    <Layout>
      <Title variant="h4">{appName}</Title>
    </Layout>
  );
};

const Title = styled(Typography)`
  margin: 36px 0 !important;
`;
