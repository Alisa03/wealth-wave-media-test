import {
  createElement,
  Attributes,
  CSSProperties,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
} from "react";

export declare namespace JSX {
  interface IntrinsicElements {
    [key: string]: any;
  }
}

export type BaseButtonComponent = ElementType; // Используем ElementType для более гибкой типизации

export type BaseProps<C extends BaseButtonComponent = "button"> = {
  component?: C;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode; // Добавляем children здесь
} & Attributes;

export type BaseButtonProps<C extends BaseButtonComponent = "button"> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ElementType
    ? C extends ComponentPropsWithRef<infer P>
      ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
      : never
    : never;

export type IButton<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
    variant?: "contained" | "outline" | "text";
    to?: string;
    onClick?: (arg: any) => any;
  };

export default function BaseButton<C extends BaseButtonComponent = "button">({
  component = "button",
  children,
  ...props
}: BaseButtonProps<C>) {
  return createElement(component, props, children); // Теперь это должно работать без ошибок
}
