import clsx from "clsx";

import { BaseButtonComponent, BaseButtonProps, IButton } from "./types";
import BaseButton from "./BaseButton";

import s from "./button.module.scss";

export function Button<C extends BaseButtonComponent = "button">({
  className,
  variant = 'text',
  to,
  onClick,
  ...props
}: IButton<C>) {
  return (
    <BaseButton<C>
      to={to}
      onClick={onClick}
      className={clsx(s.btn, s.button, className, s[variant])}
      {...(props as BaseButtonProps<C>)}
    >
      <span>
        {props.children}
      </span>
    </BaseButton>
  );
};