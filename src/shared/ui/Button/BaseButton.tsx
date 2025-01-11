import { createElement } from "react";

import { BaseButtonComponent, BaseButtonProps } from "./types";

export default function BaseButton<C extends BaseButtonComponent = "button">({
  component = "button",
  children,
  ...props
}: BaseButtonProps<C>) {
  return createElement(component, props, children);
}