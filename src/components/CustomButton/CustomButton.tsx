"use client";

import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./CustomButton.module.scss";

interface IProps {
  children: ReactNode;
  theme?:
    | "primary"
    | "tertiary"
    | "secondary"
    | "outline"
    | "outline2"
    | "bunner"
    | "imageOutline"
    | "withoutStyles";
  type?: "button" | "reset" | "submit";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const CustomButton: FC<IProps> = ({
  children,
  theme,
  type = "button",
  className,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        styles.root,
        { [styles[theme ?? ""]]: theme },
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
