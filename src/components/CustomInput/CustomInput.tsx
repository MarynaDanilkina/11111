import classNames from "classnames";
import { nanoid } from "nanoid";
import { ChangeEvent, FC } from "react";

import styles from "./CustomInput.module.scss";
import { CustomParagraph } from "../CustomParagraph";

import SearchIcon from "@/assets/icons/SearchIcon.svg";

interface IProps {
  value: string;
  name?: string;
  placeholder?: string;
  theme?: "search" | "valueMoney";
  nameMoney?: string;
  isError?: boolean;
  errorText?: string;
  className?: string;
  id?: string;
  type?: "text" | "number" | "password" | "email";
  isDisabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<IProps> = ({
  value,
  name,
  placeholder,
  theme,
  nameMoney,
  isError,
  className,
  type = "text",
  id = nanoid(),
  isDisabled,
  errorText,
  onChange,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {theme === "search" && <SearchIcon className={styles.searchIcon} />}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames(
          styles.input,
          { [styles.error]: isError },
          { [styles[theme ?? ""]]: theme }
        )}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        disabled={isDisabled}
      />
      {theme === "valueMoney" && nameMoney && (
        <CustomParagraph
          as="b2"
          className={classNames(styles.nameMoney, {
            [styles.nameMoneyError]: isError,
          })}
        >
          {nameMoney}
        </CustomParagraph>
      )}
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};
