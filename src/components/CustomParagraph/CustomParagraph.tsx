import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./CustomParagraph.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  theme?: "b1Bunner";
  as?: "b1" | "b2" | "b3" | "b4" | "b5" | "b6" | "b7";
}

export const CustomParagraph: FC<IProps> = ({
  children,
  className,
  theme,
  as = "b1",
}) => {
  return (
    <p
      className={classNames(
        styles.root,
        styles[as],
        { [styles[theme ?? ""]]: theme },
        className
      )}
    >
      {children}
    </p>
  );
};
