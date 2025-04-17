import styles from './YouTubeSlide.module.scss'
import { CustomButton } from "@/components/CustomButton"
import { CustomLink } from "@/components/CustomLink"
import { CustomParagraph } from "@/components/CustomParagraph"
import { CustomTitle } from "@/components/CustomTitle"

import CrumbsSlideIcon from '@/assets/icons/slides/CrumbsSlideIcon.svg'
import YoutubeSlideIcon from '@/assets/icons/slides/YoutubeSlideIcon.svg'

export const YouTubeSlide = () => {
    return <CustomLink
        href="https://m.youtube.com/@Nixbuy"
        target='_blank'
        className={styles.root}>
        <YoutubeSlideIcon className={styles.youtubeSlideIcon} />
        <CrumbsSlideIcon className={styles.crumbsSlideIcon} />
        <CustomTitle as='h1' theme='h1Bunner' className={styles.title}>YouTube</CustomTitle>
        <CustomParagraph as='b1' theme='b1Bunner' className={styles.pharagraph}>Откройте захватывающий мир нашего контента на YouTube!</CustomParagraph>
        <CustomButton theme='primary' className={styles.btn}>Открыть</CustomButton>
    </CustomLink>
}