import React from 'react';

import { TypeOptions, Theme } from '../../types';

export interface IconProps {
  theme: Theme;
  type: TypeOptions;
}

export type BuildInIconProps = React.SVGProps<SVGSVGElement> & IconProps;

const Svg: React.FC<BuildInIconProps> = ({ theme, type, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fillOpacity={
      theme === 'colored'
        ? 'currentColor'
        : `var(--toastify__toast-icon-color-${type})`
    }
    {...rest}
  />
);

const Svg32: React.FC<BuildInIconProps> = ({ theme, type, ...rest }) => (
  <svg
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    fillOpacity={
      theme === 'colored'
        ? 'currentColor'
        : `var(--toastify__toast-icon-color-${type})`
    }
    {...rest}
  />
);

function Warning(props: BuildInIconProps) {
  return (
    <Svg {...props}>
      <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" />
    </Svg>
  );
}

function Info(props: BuildInIconProps) {
  return (
    <Svg {...props}>
      <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" />
    </Svg>
  );
}

function Success(props: BuildInIconProps) {
  return (
    <Svg {...props}>
      <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" />
    </Svg>
  );
}

function Error(props: BuildInIconProps) {
  return (
    <Svg {...props}>
      <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" />
    </Svg>
  );
}

function Backward(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M18 5v10l10-10v22l-10-10v10l-11-11z" />
    </Svg32>
  );
}

function Forward(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z" />
    </Svg32>
  );
}

function Next(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z" />
    </Svg32>
  );
}

function Previous(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M8 28v-24h4v11l10-10v22l-10-10v11z" />
    </Svg32>
  );
}

function CircleLeft(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z" />
      <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z" />
    </Svg32>
  );
}

function CircleRight(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
      <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z" />
    </Svg32>
  );
}

function CircleNext(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM16 29c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z" />
      <path d="M18 16l-8-6v12z" />
      <path d="M22 10h-4v12h4v-12z" />
    </Svg32>
  );
}

function CirclePrevious(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
      <path d="M14 16l8-6v12z" />
      <path d="M10 10h4v12h-4v-12z" />
    </Svg32>
  );
}

function MinusBox(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <path d="M27,4v24H4V4H27 M28,3H3v26h25V3L28,3z" />
      <line
        style={{ fill: 'none', stroke: '#000' }}
        x1="9.5"
        y1="16.5"
        x2="22.5"
        y2="16.5"
      />
    </Svg32>
  );
}

function PlusBox(props: BuildInIconProps) {
  return (
    <Svg32 {...props}>
      <g>
        <path
          d="M27,4v24H4V4H27 M14.5,15.5h-5v2h5v5h2v-5h6v-2h-6v-6h-2V15.5 M28,3H3v26h25V3L28,3z M9.5,16.5h6v-7v7h7h-7v6v-6H9.5
          L9.5,16.5z"
        />
      </g>
    </Svg32>
  );
}

export const Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  backward: Backward,
  forward: Forward,
  previous: Previous,
  next: Next,
  circleLeft: CircleLeft,
  circleRight: CircleRight,
  circleNext: CircleNext,
  circlePrevious: CirclePrevious,
  minusBox: MinusBox,
  plusBox: PlusBox,
};
