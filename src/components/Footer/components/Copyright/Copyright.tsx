import styles from './Copyright.module.scss'
import { CustomParagraph } from "@/components/CustomParagraph"

export const Copyright = () => {
    const createYear = () => {
        const date = new Date();

        return date.getFullYear();
    }

    return <CustomParagraph as='b5' className={styles.root}>© {createYear()} Nixbuy - торговая площадка цифровых товаров. Все права защищены.</CustomParagraph>
}