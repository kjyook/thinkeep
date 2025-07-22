import * as React from 'react';
import type { SVGProps } from 'react';
import { viewBoxSize } from '../svg-icon.types';
type svgIconProps = SVGProps<SVGSVGElement> & {
  width: number | string,
  heigth: number | string,
  viewBox?: viewBoxSize,
  fill?: string,
};
export const SvgFaceSad = ({
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
      <rect width={88} height={88} fill="#85BEFF" rx={44} />
      <path
        fill="#2D2D29"
        d="M48.668 30.456C47.351 29.842 40.777 28 38.146 28c-1.315 8.597 6.575 9.825 9.205 8.597 2.105-.983 1.754-4.503 1.316-6.14M34.668 32.456C33.351 31.842 26.777 30 24.146 30c-1.315 8.597 6.575 9.825 9.205 8.597 2.105-.983 1.754-4.503 1.316-6.14"
      />
      <path
        fill="#FAFAF8"
        d="M47.703 34.657c.875 2.045 3.18 5.694 5.397 3.926 2.771-2.21-4.91-8.055-5.397-3.926"
      />
      <path
        fill="#2D2D29"
        d="M36.223 43.037c-3.878-.433-3.462 3.066-2.77 4.87.452 2.164 6.232.54 11.08 0 4.847-.542-3.463-4.33-8.31-4.87"
      />
    </svg>
  );
};
export default SvgFaceSad;
