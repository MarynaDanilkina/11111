'use client'

import Link from "next/link";

import { CustomLink } from "../CustomLink";
import { WidthWrapper } from "../WidthWrapper";
import { AuthControl } from "./components/AuthControl";
import { MobileNav } from "./components/MobileNav";
import { Navigation } from "./components/Navigation";
import styles from "./Header.module.scss";
import { useAuthCheck } from "@/hooks/useAuthCheck";

import LogoIcon from "@/assets/icons/LogoIcon.svg";

export const Header = () => {
  useAuthCheck()

  return (
    <header className={styles.root}>
      <WidthWrapper className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <Link href="/" className={styles.logoLink}>
            <LogoIcon className={styles.logo}/>
          </Link>
          <Navigation/>
        </div>
        <div className={styles.rightWrapper}>
          <AuthControl/>
          <CustomLink
            href="/create-announcement"
            theme="primary"
            className={styles.createAnnouncementLink}
          >
            Подать объявление
          </CustomLink>
        </div>
        <MobileNav/>
      </WidthWrapper>
    </header>
  );
};
