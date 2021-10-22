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

  main {
    overflow-y: scroll;
  }

  &::before{
    content: "";
    position: absolute;
    background: url("/images/ellipse-center.png");
    left: -42.5%;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 80vw;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
    z-index: -1;
  }
`;

export const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{props.children}</main>
    </StyledLayout>
  );
};
