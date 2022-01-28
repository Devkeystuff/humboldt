import React, { ReactNode, useEffect, useRef } from 'react';
import { Navbar } from './Navbar';
import styled from 'styled-components';
import Scrollbar from 'smooth-scrollbar';

interface LayoutProps {
  children?: ReactNode;
}

const StyledLayout = styled.div`
  height: 100vh;
`;

export const Layout: React.FC<LayoutProps> = props => {
  const layoutRef = useRef(null);

  useEffect(() => {
    if (layoutRef.current) {
      Scrollbar.init(layoutRef.current);
    }
  }, []);

  return (
    <StyledLayout ref={layoutRef}>
      <Navbar />
      <main style={{ height: '200vh' }}>{props.children}</main>
    </StyledLayout>
  );
};
