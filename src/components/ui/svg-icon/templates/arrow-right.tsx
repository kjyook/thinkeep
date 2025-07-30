import * as React from 'react';
import type { SVGProps } from 'react';
import { svgIconProps } from '../svg-icon.types';
export const SvgArrowRight = ({
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
        id="arrow_right_svg__a"
        width={48}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="#D9D9D9" d="M48 0H0v48h48z" />
      </mask>
      <g mask="url(#arrow_right_svg__a)">
        <path
          fill="#FAFAF8"
          className={fill}
          d="m21.178 38.581 13.236-13.24q.25-.252.419-.592Q35 24.41 35 24t-.167-.75a2.2 2.2 0 0 0-.42-.59L21.179 9.418a1.7 1.7 0 0 0-.399-.293A1 1 0 0 0 20.283 9q-.53 0-.906.345-.377.346-.377.912v27.486q0 .565.389.91.387.348.905.347.13 0 .884-.419"
        />
      </g>
    </svg>
  );
};
export default SvgArrowRight;
