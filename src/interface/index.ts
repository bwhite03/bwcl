import {
  AnimationTypes,
  Theme,
  ToastContent,
  ToastOptions,
  ToastPosition,
  TypeOptions,
} from "../types";

export interface ToastContainerProps {
  position?: ToastPosition;
  autoClose?: boolean;
  autoCloseSelay?: number;
  showIcons?: boolean;
  theme?: Theme;
  animation?: AnimationTypes;
  showLastOnTop?: boolean;
}

export interface ToastManagerToastProps {
  content: ToastContent;
  id: string;
  type: TypeOptions;
  position: ToastPosition;
}
