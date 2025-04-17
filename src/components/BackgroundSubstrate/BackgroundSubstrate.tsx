import { FC, ReactNode } from "react"

import styles from './BackgroundSubstrate.module.scss'
interface IProps {
    children: ReactNode;
}

export const BackgroundSubstrate: FC<IProps> = ({ children }) => {
    return <div className={styles.root}>{children}</div>
}