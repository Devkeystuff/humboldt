import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import styled from "styled-components";

type ILayoutProps = {
  children?: ReactNode;
};

const StyledLayout = styled.div`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{props.children}</main>
    </StyledLayout>
  );
};
