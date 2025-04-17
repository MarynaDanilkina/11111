import classNames from "classnames";
import Link from "next/link"
import { FC, ReactNode } from "react"

import styles from './CustomLink.module.scss'

interface IProps {
    children: ReactNode;
    href: string;
    theme?: 'primary' | 'secondary' | 'underlineLink';
    className?: string;
    target?: '_blank'
}

export const CustomLink: FC<IProps> = ({ children, href, theme, className, target }) => {
    return <Link
        href={href}
        className={classNames(styles.root, { [styles[theme ?? '']]: theme }, className)}
        target={target}
    >
        {children}
    </Link>
}