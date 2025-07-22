import * as React from 'react';
import type { SVGProps } from 'react';
import { viewBoxSize } from '../svg-icon.types';
type svgIconProps = SVGProps<SVGSVGElement> & {
  width: number | string,
  heigth: number | string,
  viewBox?: viewBoxSize,
  fill?: string,
};
export const SvgFaceMad = ({
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
      <rect width={87} height={87} fill="#FF7C68" rx={43.5} />
      <path
        fill="#2D2D29"
        d="M41.992 43.591c-2.44-1.83-15.163-8.454-20.571-9.588-3.36 13.637 8.696 20.707 14.633 19.317 4.75-1.112 6.133-6.173 5.938-9.729M49.71 43.88c1.348-1.792 8.98-9.079 12.566-10.988 6.197 9.893-1.324 16.659-5.803 16.893-3.583.188-6.172-3.353-6.763-5.904"
      />
    </svg>
  );
};
export default SvgFaceMad;
