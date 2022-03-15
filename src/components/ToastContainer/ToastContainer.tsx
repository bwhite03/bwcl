import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useToastContainer } from '../../hooks';
import { toastManager, Event } from '../../core';
import { Default } from '../../utils';
import { ToastContainerProps } from '../../interface';
import {
  Id,
  NotValidatedToastProps,
  ToastProps,
  ToastContent,
} from '../../types';
import Toast from '../Toast';

const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  const {
    position = 'top-right',
    autoCloseSelay,
    showIcons,
    theme,
    animation,
    showLastOnTop,
  } = props;

  const { loaded, portalId } = useToastContainer(position);
  const domElement = document.getElementById(portalId);
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  let { autoClose = true } = props;

  useEffect(() => {}, [toasts]);

  function buildToast(
    content: ToastContent,
    { ...options }: NotValidatedToastProps
  ) {
    let toastList = [...toastManager.getToastList()];
    if (showLastOnTop) {
      toastList = toastList.reverse();
    }
    setToasts(toastList);

    if (options.autoClose === true || options.autoClose === false) {
      autoClose = options.autoClose;
    }

    if (autoClose) {
      setTimeout(() => {
        const toastDiv = document.getElementById(options.toastId as string);
        if (toastDiv) {
          toastDiv.classList.remove(
            `${Default.CSS_NAMESPACE}__${animation}-enter--${position}`
          );
          toastDiv.classList.add(
            `${Default.CSS_NAMESPACE}__${animation}-exit--${position}`
          );

          toastDiv.style.animationDuration = '1s';
          toastDiv.style.animationFillMode = 'forwards';

          // now we can call another setTimeout used to remove the element entirely
          setTimeout(() => {
            toastManager.publish(Event.Clear, options.toastId);
          }, 550);
        }
      }, autoCloseSelay);
    }
  }

  toastManager.subscribe(Event.Show, buildToast);

  function removeToast() {
    setToasts(toastManager.getToastList());
  }

  toastManager.subscribe(Event.Clear, () => removeToast());

  if (domElement && loaded) {
    return ReactDOM.createPortal(
      <div className={`${Default.CSS_NAMESPACE}__toast-container`}>
        {toasts.map((event: ToastProps, i: number) => {
          return (
            <Toast
              key={`toast-${i}`}
              toastId={event.toastId as Id}
              content={event.content}
              type={event.type}
              showIcon={showIcons}
              theme={theme}
              position={position}
              animation={animation || undefined}
              toastAnimation={event.toastAnimation}
              options={event.options}
              toastShowIcon={event.toastShowIcon}
              toastAutoClose={event.toastAutoClose}
              toastClassName={event.toastClassName}
              toastBodyStyle={event.toastBodyStyle}
            />
          );
        })}
      </div>,
      domElement
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

ToastContainer.defaultProps = {
  position: 'top-right',
  autoClose: true,
  autoCloseSelay: 10000,
  showIcons: false,
  theme: 'dark',
  showLastOnTop: false,
};

export default ToastContainer;
