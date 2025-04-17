import { refund, rulesItems, sellerLimits } from "./constants";
import styles from "./Rules.module.scss";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";

export default function Rules() {
  return (
    <main>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <CustomTitle as="h1" className={styles.whiteColor}>
              Правила
            </CustomTitle>
            <div className={styles.content}>
              {rulesItems.map((item, index) => (
                <div className={styles.item} key={index}>
                  <CustomParagraph as="b1" className={styles.primaryColor}>{`${
                    index + 1
                  }.`}</CustomParagraph>
                  <CustomParagraph as="b1" className={styles.grayColor}>
                    {item}
                  </CustomParagraph>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.subBlock}>
            <CustomTitle as="h3" className={styles.whiteColor}>
              Возврат средств
            </CustomTitle>
            <div className={styles.subContent}>
              {refund.map((item, index) => (
                <div className={styles.item} key={index}>
                  <CustomParagraph as="b1" className={styles.primaryColor}>{`${
                    index + 1
                  }.`}</CustomParagraph>
                  <CustomParagraph as="b1" className={styles.grayColor}>
                    {item}
                  </CustomParagraph>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.subBlock}>
            <CustomTitle as="h3" className={styles.whiteColor}>
              Ограничения для продавца
            </CustomTitle>
            <div className={styles.subContent}>
              <CustomParagraph as="b1" className={styles.grayColor}>
                {sellerLimits.text}
              </CustomParagraph>
              <div className={styles.sellerLimits}>
                {sellerLimits.limits.map((item, index) => (
                  <CustomParagraph
                    key={index}
                    as="b1"
                    className={styles.grayColor}
                  >
                    {item}
                  </CustomParagraph>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
