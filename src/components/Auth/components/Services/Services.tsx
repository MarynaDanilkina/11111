'use client'

import * as VKID from '@vkid/sdk';
import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./Services.module.scss";
import { API_PATHS } from "@/api/API_PATHS";
import { googleLogin } from "@/api/auth/auth";
import useTelegramAuth from "@/components/Auth/components/TelegramAuth/useTelegramAuth";
import { CustomButton } from "@/components/CustomButton";
import { CustomParagraph } from "@/components/CustomParagraph";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";

import GoogleIcon from "@/assets/icons/socials/GoogleIcon.svg";
import TelegramIcon from "@/assets/icons/socials/TelegramIcon.svg";
import VKIcon from "@/assets/icons/socials/VKIcon.svg";

interface IProps {
  title: string;
}

export const Services: FC<IProps> = ({title}) => {

  const onGoogleClick = async () => {
    try {
      const resp = await googleLogin();
      window.location.href = resp.data.redirectUrl

    } catch (error) {
      toast.error(RESPONSE_MESSAGES.unknownError);
      console.error(error);
    }
  };

  const onVKClick = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    VKID.Config.init({
      app: Number(process.env.NEXT_PUBLIC_VK_CLIENT_ID),
      redirectUrl: `${baseURL}${API_PATHS.auth.VKCallback}`,
      scope: "email profile",
      mode: VKID.ConfigAuthMode.InNewTab
    });
    try {
      VKID.Auth.login().catch((error) => {
        console.error("VK Auth Error:", error);
        toast.error(RESPONSE_MESSAGES.unknownError);
      });
    } catch (error) {
      console.error("VK Init/Login Error:", error);
      toast.error(RESPONSE_MESSAGES.unknownError);
    }
  };

  // const onVKClick_2 = async () => {
  //   try {
  //     const resp = await vkLogin();
  //
  //     // window.location.href = resp.data.redirectUrl;
  //     console.log('VK Response:',resp)
  //   } catch (error) {
  //     toast.error(RESPONSE_MESSAGES.unknownError);
  //     console.error(error);
  //   }
  // };

  const {startTelegramAuth} = useTelegramAuth()

  return (
    <div className={styles.root}>
      <CustomParagraph as="b3">{title}</CustomParagraph>
      <div className={styles.btnsWrapper}>
        <CustomButton theme="imageOutline" onClick={onGoogleClick}>
          <GoogleIcon/>
        </CustomButton>
        <CustomButton theme="imageOutline" onClick={onVKClick}>
          <VKIcon/>
        </CustomButton>
        <CustomButton theme="imageOutline" onClick={startTelegramAuth}>
          <TelegramIcon/>
        </CustomButton>
      </div>
    </div>
  );
};
