"use client";

import { toast } from "react-toastify";

import styles from "./MobileNav.module.scss";
import { CustomButton } from "@/components/CustomButton";
import { CustomLink } from "@/components/CustomLink";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";

import CatalogIcon from "@/assets/icons/CatalogIcon.svg";
import ChatIcon from "@/assets/icons/ChatsIcon.svg";
import PlusIcon from "@/assets/icons/PlusIcon.svg";

export const MobileNav = () => {
  const onClick = () => {
    toast.warn(RESPONSE_MESSAGES.unloggedUser);
  };

  return (
    <nav className={styles.root}>
      <CustomLink href="/catalog" className={styles.link}>
        <CatalogIcon />
        Каталог
      </CustomLink>
      <CustomLink href="/create-announcement" className={styles.link}>
        <PlusIcon />
        Подать
      </CustomLink>
      <CustomButton
        theme="withoutStyles"
        className={styles.btn}
        onClick={onClick}
      >
        <ChatIcon />
        Чаты
      </CustomButton>
    </nav>
  );
};
