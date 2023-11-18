import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import Navbar from "@/lib/navbar/Navbar";
import clsx from "clsx";
import css from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  className?: string;
  isMaxWidth?: boolean;
};

const Layout = ({ children, isMaxWidth, className, ...props }: Props) => (
  <React.Fragment {...props}>
    <Navbar />
    <div className={clsx(isMaxWidth && css.Layout, className)}>{children}</div>
  </React.Fragment>
);

export default Layout;
