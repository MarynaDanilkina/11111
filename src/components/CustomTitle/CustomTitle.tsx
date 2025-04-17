import classNames from "classnames";
import { ElementType, FC, ReactNode } from "react"

import styles from './CustomTitle.module.scss'

interface IProps {
    children: ReactNode;
    className?: string;
    theme?: 'h1Bunner'
    as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const CustomTitle: FC<IProps> = ({ children, className, theme, as = 'h1' }) => {
    const Component: ElementType = as;

    return <Component
        className={classNames(styles.root, styles[as],
            { [styles[theme ?? '']]: theme },
            className)}>
        {children}
    </Component>
}