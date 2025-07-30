import * as React from 'react';
import type { SVGProps } from 'react';
import { svgIconProps } from '../svg-icon.types';
export const SvgArrowLeft = ({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: svgIconProps) => {
  if (fill !== 'none') fill = 'fill-' + fill;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      {...props}
    >
      <mask
        id="arrow_left_svg__a"
        width={48}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="#D9D9D9" d="M0 0h48v48H0z" />
      </mask>
      <g mask="url(#arrow_left_svg__a)">
        <path
          fill="#FAFAF8"
          className={fill}
          d="m26.822 38.581-13.236-13.24a2.2 2.2 0 0 1-.418-.592A1.7 1.7 0 0 1 13 24q0-.409.168-.75.166-.34.418-.59L26.822 9.418q.168-.168.399-.293.231-.126.496-.126.53 0 .906.345.377.346.377.912v27.486q0 .565-.389.91-.387.348-.905.347-.13 0-.884-.419"
        />
      </g>
    </svg>
  );
};
export default SvgArrowLeft;
