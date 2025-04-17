import classNames from "classnames";
import { FC, ReactNode } from "react"

import styles from './WidthWrapper.module.scss'

interface IProps {
    children: ReactNode;
    className?: string;
}

export const WidthWrapper: FC<IProps> = ({ children, className }) => {
    return <div className={classNames(styles.root, className)}>{children}</div>
}