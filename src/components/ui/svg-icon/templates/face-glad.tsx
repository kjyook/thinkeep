import * as React from 'react';
import type { SVGProps } from 'react';
import { svgIconProps } from '../svg-icon.types';

export const SvgFaceGlad = ({
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
      fill="none"
      {...props}
    >
      <rect width={88} height={88} fill="#FFF782" rx={44} className={fill} />
      <path
        stroke="#2D2D29"
        strokeLinecap="round"
        strokeWidth={5}
        d="M38.103 44.04c-2.869-4.676-10.4-10.73-17.58 2.459M48.897 40.79c.875-5.415 5.538-13.878 17.193-4.411"
      />
      <path
        fill="#2D2D29"
        d="M50.667 75.13c-12.162 2.69-27.311-9.15-27.118-13.94.082-2.052 2.43-.423 8.626-1.79 13.354-2.945 18.04-3.808 28.82-7.562 8.579-2.988 9.064-2.56 8.832-.174.072 10.011-8.809 21.175-19.16 23.465"
      />
    </svg>
  );
};
export default SvgFaceGlad;
