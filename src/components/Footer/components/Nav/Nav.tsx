import styles from './Nav.module.scss'
import { CustomLink } from '@/components/CustomLink'

export const Nav = () => {
    return <div className={styles.root}>
        <CustomLink href='/about' theme='primary' className={styles.link}>О нас</CustomLink>
        <CustomLink href='/contacts' theme='secondary' className={styles.link}>Контакты</CustomLink>
    </div>
}