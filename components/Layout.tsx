import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import styles from "../styles/modules/Layout.module.scss";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC = (props: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};
