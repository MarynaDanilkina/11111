import styles from "./TelegramSlide.module.scss";
import { CustomButton } from "@/components/CustomButton";
import { CustomLink } from "@/components/CustomLink";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";

import RoundedLinesIcon from "@/assets/icons/slides/RoundedLinesIcon.svg";
import RoundedLinesMobileIcon from "@/assets/icons/slides/RoundedLinesMobileIcon.svg";
import TelegramIcon from "@/assets/icons/slides/TelegramSlideIcon.svg";

export const TelegramSlide = () => {
  return (
    <CustomLink
      className={styles.root}
      href="https://t.me/nixbuy"
      target="_blank"
    >
      <TelegramIcon className={styles.telegramIcon} />
      <RoundedLinesIcon className={styles.roundedLinesIcon} />
      <RoundedLinesMobileIcon className={styles.roundedLinesMobileIcon} />
      <CustomTitle as="h1" theme="h1Bunner">
        Telegram
      </CustomTitle>
      <CustomParagraph as="b1" theme="b1Bunner">
        Подписывайся и узнавай об акциях первым!
      </CustomParagraph>
      <CustomButton theme="primary" className={styles.btn}>
        Подписаться
      </CustomButton>
    </CustomLink>
  );
};
