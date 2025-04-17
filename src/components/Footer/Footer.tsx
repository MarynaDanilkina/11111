import { CustomLink } from '../CustomLink'
import { WidthWrapper } from '../WidthWrapper'
import { Copyright } from './components/Copyright'
import { Nav } from './components/Nav'
import { PaymentSystems } from './components/PaymentSystems'
import { Socials } from './components/Socials'
import styles from './Footer.module.scss'

export const Footer = () => {
    return <footer className={styles.root}>
        <WidthWrapper className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <Socials />
                <PaymentSystems />
                <Nav />
            </div>
            <div className={styles.bottomWrapper}>
                <Copyright />
                <div className={styles.linksWrapper}>
                    <CustomLink href='/privacy-policy' className={styles.link}>Политика конфиденциальности</CustomLink>
                    <CustomLink href='/user-agreement' className={styles.link}>Пользовательское соглашение</CustomLink>
                    <CustomLink href='/offerta' theme='underlineLink' className={styles.link}>Офферта</CustomLink>
                </div>
            </div>
        </WidthWrapper>
    </footer>
}