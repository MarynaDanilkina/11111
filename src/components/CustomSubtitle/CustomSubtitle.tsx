import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./CustomSubtitle.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  as?: "s1" | "s2";
}

export const CustomSubtitle: FC<IProps> = ({
  children,
  className,
  as = "s1",
}) => {
  return (
    <p className={classNames(styles.root, styles[as], className)}>{children}</p>
  );
};
