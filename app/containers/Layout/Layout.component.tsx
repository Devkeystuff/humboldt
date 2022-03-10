import React, { ReactNode } from 'react';
import { Navbar } from '../../components/index';
import { StyledLayout } from './Layout.styled';

type ILayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
