import styles from "./Socials.module.scss";
import { CustomLink } from "@/components/CustomLink";
import { CustomParagraph } from "@/components/CustomParagraph";

import TelegramIcon from "@/assets/icons/socials/TelegramIcon.svg";
import TtIcon from "@/assets/icons/socials/TtIcon.svg";
import VKIcon from "@/assets/icons/socials/VKIcon.svg";
import YouTubeIcon from "@/assets/icons/socials/YouTubeIcon.svg";

export const Socials = () => {
  return (
    <div className={styles.root}>
      <CustomParagraph as="b3" className={styles.title}>
        Мы в социальных сетях
      </CustomParagraph>

      <div className={styles.socialsLinksWrapper}>
        <CustomLink href="https://t.me/nixbuy" className={styles.link}>
          <TelegramIcon />
        </CustomLink>
        <CustomLink
          href="https://www.tiktok.com/@nixbuy.com"
          className={styles.link}
        >
          <TtIcon />
        </CustomLink>
        <CustomLink
          href="https://m.youtube.com/@Nixbuy"
          className={styles.link}
        >
          <YouTubeIcon />
        </CustomLink>
        <CustomLink href="https://m.vk.com/nixbuy" className={styles.link}>
          <VKIcon />
        </CustomLink>
      </div>
    </div>
  );
};
