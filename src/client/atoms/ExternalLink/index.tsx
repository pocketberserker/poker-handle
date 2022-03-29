import React from "react";
import styled from "@emotion/styled";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const Link = styled.a`
  text-decoration: underline;
`;
