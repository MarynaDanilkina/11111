import classNames from "classnames";
import { nanoid } from "nanoid";
import { ChangeEvent, FC, ReactNode } from "react";

import styles from "./CustomCheckbox.module.scss";
import { CustomParagraph } from "../CustomParagraph";

interface IProps {
  id?: string;
  name?: string;
  children?: ReactNode | string;
  className?: string;
  isDisabled?: boolean;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  labelStyles?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox: FC<IProps> = ({
  id = nanoid(),
  name,
  children,
  className,
  isDisabled = false,
  value,
  checked,
  labelStyles,
  onChange,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <input
        type="checkbox"
        id={id}
        name={name || id}
        className={styles.input}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className={classNames(styles.label, labelStyles, {
          [styles.disabled]: isDisabled,
        })}
      >
        <CustomParagraph
          as="b3"
          className={classNames(styles.colorWhite, {
            [styles.isDisabled]: isDisabled,
          })}
        >
          {children}
        </CustomParagraph>
      </label>
    </div>
  );
};
