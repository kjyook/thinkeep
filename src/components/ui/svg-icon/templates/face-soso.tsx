import * as React from 'react';
import type { SVGProps } from 'react';
import { viewBoxSize } from '../svg-icon.types';
type svgIconProps = SVGProps<SVGSVGElement> & {
  width: number | string;
  height: number | string;
  viewBox?: viewBoxSize;
  fill?: string;
};
export const SvgFaceSoso = ({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: svgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      {...props}
    >
      <rect width={87} height={87} fill="#FFF782" rx={43.5} />
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
