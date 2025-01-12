import clsx from "clsx";

import BaseButton from "./BaseButton";
import { BaseButtonComponent, BaseButtonProps, IButton } from "./types";

import s from './button.module.scss'

export function IconButton<C extends BaseButtonComponent = "button">({
    children,
    variant = 'text',
    to,
    className,
    onClick,
    ...props
}: IButton<C>) {
    return (
        <BaseButton<C>
            to={to}
            onClick={onClick}
            className={clsx(s.btn, className, s.icon, s[variant])}
            {...(props as BaseButtonProps<C>)}
        >
            {children}
        </BaseButton>
    );
};