import React, { ReactNode } from 'react';
import { Navbar } from '../../components/index';
import { StyledLayout } from './Layout.styled';

type ILayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{props.children}</main>
    </StyledLayout>
  );
};

export default Layout;
