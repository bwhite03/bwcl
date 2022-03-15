import { ToastPosition } from '../types';

export function generateToastId(): string {
  return (
    Date.now().toString(36) + Math.random().toString(36).substr(2).toString()
  );
}

export const getToastContainerPosition = (position: ToastPosition) => {
  switch (position) {
    case 'top-right':
      return 'position: fixed; top: 10px; right: 10px; z-index: 9999';
    case 'top-left':
      return 'position: fixed; top: 10px; left: 10px; z-index: 9999';
    case 'top-center':
      return 'position: fixed; top: 10px; left: 50%; z-index: 9999';
    case 'bottom-right':
      return 'position: fixed; bottom: 10px; right: 10px; z-index: 9999';
    case 'bottom-left':
      return 'position: fixed; bottom: 10px; left: 10px; z-index: 9999';
    case 'bottom-center':
      return 'position: fixed; bottom: 10px; left: 50%; z-index: 9999';
    default:
      return 'position: fixed; top: 10px; right: 10px; z-index: 9999';
  }
};
