import styles from "./About.module.scss";
import { howToBuy, advantages, aboutUs, commonInfo } from "./constants";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomSubtitle } from "@/components/CustomSubtitle";
import { CustomTitle } from "@/components/CustomTitle";

export default function About() {
  return (
    <main>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <CustomTitle as="h1" className={styles.whiteColor}>
              О нас
            </CustomTitle>
            <div className={styles.content}>
              {aboutUs.map((item, index) => (
                <div className={styles.item} key={index}>
                  <CustomSubtitle className={styles.subtitle} as="s2">
                    {item}
                  </CustomSubtitle>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.wrapperCommonInfo}>
            {commonInfo.map((item, index) => (
              <div key={index} className={styles.wrapperCommonInfoItem}>
                <CustomTitle as="h2" className={styles.greenColor}>
                  {item.firstField}
                </CustomTitle>
                <CustomParagraph as="b1" className={styles.grayColor}>
                  {item.secondField}
                </CustomParagraph>
              </div>
            ))}
          </div>
          <div className={styles.subBlock}>
            <CustomTitle as="h3" className={styles.whiteColor}>
              Преимущества Nixbuy
            </CustomTitle>
            <div className={styles.subContent}>
              {advantages.map((item, index) => (
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
              Как купить?
            </CustomTitle>
            <div className={styles.subContent}>
              {howToBuy.map((item, index) => (
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
        </div>
      </div>
    </main>
  );
}
