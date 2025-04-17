import { contacts } from "./constants";
import styles from "./Contacts.module.scss";
import { CustomCaption } from "@/components/CustomCaption";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";

export default function Contacts() {
  return (
    <main>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <CustomTitle as="h1" className={styles.whiteColor}>
            Контакты
          </CustomTitle>
          <div className={styles.content}>
            {contacts.map((item, index) => (
              <div className={styles.item} key={index}>
                <CustomParagraph as="b1" className={styles.grayColor}>
                  {item.text}
                </CustomParagraph>
                <CustomCaption as="c1" className={styles.greenColor}>
                  {item.email}
                </CustomCaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
