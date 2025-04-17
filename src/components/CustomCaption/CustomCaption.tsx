import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./CustomCaption.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  as?: "c1" | "c2" | "c3";
}

export const CustomCaption: FC<IProps> = ({
  children,
  className,
  as = "c1",
}) => {
  return (
    <p className={classNames(styles.root, styles[as], className)}>{children}</p>
  );
};
