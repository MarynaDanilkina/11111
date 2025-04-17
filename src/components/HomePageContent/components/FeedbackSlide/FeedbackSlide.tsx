import styles from './FeedbackSlide.module.scss'
import { CustomButton } from "@/components/CustomButton"
import { CustomLink } from "@/components/CustomLink"
import { CustomParagraph } from "@/components/CustomParagraph"
import { CustomTitle } from "@/components/CustomTitle"

import CenterLineIcon from '@/assets/icons/slides/CenterLineIcon.svg'
import GlareIcon from '@/assets/icons/slides/GlareIcon.svg'

export const FeedbackSlide = () => {
    return <CustomLink
        href="https://otzovik.com/reviews/nixbuy_com-internet-magazin_cifrovih_tovarov/"
        target='_blank'
        className={styles.root}>
        <CenterLineIcon className={styles.centerLineIcon} />
        <GlareIcon className={styles.glareIcon} />
        <CustomTitle as='h1' theme='h1Bunner' className={styles.title}>Отзывы</CustomTitle>
        <CustomParagraph as='b1' theme='b1Bunner' className={styles.pharagraph}>Отзывы говорят сами за себя. Проверьте!</CustomParagraph>
        <CustomButton theme='bunner' className={styles.btn}>Смотреть</CustomButton>
    </CustomLink>
}