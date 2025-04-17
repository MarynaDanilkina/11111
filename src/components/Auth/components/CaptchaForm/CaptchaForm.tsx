"use client";

// import Turnstile from "react-turnstile";
import classNames from "classnames";
import { ChangeEvent, FC } from "react";

import styles from "./CaptchaForm.module.scss";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import { CustomParagraph } from "@/components/CustomParagraph";

import CloudflareLogoIcon from "@/assets/icons/CloudflareLogo.svg";

interface IProps {
  value: boolean;
  id?: string;
  name?: string;
  isError?: boolean;
  errorText?: string;
  className?: string;
  isDisabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CaptchaForm: FC<IProps> = ({
  value,
  id,
  name,
  onChange,
  isError,
  isDisabled,
  errorText,
  className,
}: IProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={classNames(styles.wrapper, { [styles.error]: isError })}>
        <CustomCheckbox
          id={id}
          name={name}
          checked={value}
          onChange={onChange}
          isDisabled={isDisabled}
        >
          Verify you are human
        </CustomCheckbox>
        {/* <Turnstile
            sitekey=""
            onVerify={(token) => {
              console.log("TOKEN", token);
            }}
          /> */}
        <div className={styles.wrapperIcon}>
          <CloudflareLogoIcon />
          <CustomParagraph as="b7" className={styles.colorWhite}>
            Privacy • Terms
          </CustomParagraph>
        </div>
      </div>
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};
