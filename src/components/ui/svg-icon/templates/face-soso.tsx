import * as React from 'react';
import { svgIconProps } from '../svg-icon.types';

export const SvgFaceSoso = ({
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
      viewBox={viewBox}
      {...props}
    >
      <rect width={87} height={87} fill="#FFF782" rx={43.5} className={fill} />
      <ellipse cx={29.5} cy={33} fill="#2D2D29" rx={3.5} ry={4} />
      <ellipse cx={43.5} cy={33} fill="#2D2D29" rx={3.5} ry={4} />
      <path
        stroke="#2D2D29"
        strokeLinecap="round"
        strokeWidth={5}
        d="M27 45.598c2.717 4.765 10.049 11.058 17.65-1.893"
      />
    </svg>
  );
};
export default SvgFaceSoso;
