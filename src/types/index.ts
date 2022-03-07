import React from "react";

export type TypeOptions =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "default"
  | "dark";

export type ToastPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type Theme = "light" | "dark" | "colored";

export type AnimationTypes = "slide" | "bounce" | "spin" | "zoom" | "flip";

export type Id = number | string;

export type ToastClassName =
  | { type?: TypeOptions; defaultClassName?: string; position?: ToastPosition }
  | string;

export interface ToastContentProps {
  closeToast?: () => void;
}

export type ToastContent = React.ReactNode;

export interface CommonOptions {
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
  position?: ToastPosition;
  onClick?: (event: React.MouseEvent) => void;
}

export interface ToastOptions extends CommonOptions {
  content?: ToastContent;
  animation?: AnimationTypes;
  type?: TypeOptions;
  autoClose?: boolean;
  showIcon?: boolean;
}

export interface ToastProps extends ToastOptions {
  toastId: Id;
  type: TypeOptions;
  position: ToastPosition;
  children?: ToastContent;
  className?: ToastClassName;
  theme?: Theme;
  showIcon?: boolean;
  toastAnimation?: AnimationTypes;
  toastAutoClose?: boolean;
  toastShowIcon?: boolean;
  options?: ToastOptions;
  toastClassName?: ToastClassName;
  toastBodyStyle?: React.CSSProperties;
}

export interface NotValidatedToastProps extends Partial<ToastProps> {
  toastId: Id;
  toastShowIcon: boolean;
  toastAutoClose: boolean;
  toastClassName: ToastClassName;
  toastBodyStyle: React.CSSProperties;
  bodyStyle: React.CSSProperties;
}
