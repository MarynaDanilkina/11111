import styles from './Navigation.module.scss'
import { CustomLink } from "@/components/CustomLink"

export const Navigation = () => {
    return <nav className={styles.root}>
        <CustomLink href="/catalog">Каталог</CustomLink>
        <CustomLink href="/rules">Правила</CustomLink>
    </nav>
}