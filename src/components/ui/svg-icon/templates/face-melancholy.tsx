import * as React from 'react';
import { svgIconProps } from '../svg-icon.types';

export const SvgFaceMelancholy = ({
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
      fill='none'
      {...props}
    >
      <rect width={87} height={87} fill="#FAFAF8" rx={43.5} className={fill} />
      <path
        stroke="#2D2D29"
        strokeLinecap="round"
        strokeWidth={5}
        d="M56.36 62.326c-2.183-5.032-11.512-8.331-20.012-1.831"
      />
      <ellipse cx={57.5} cy={44} fill="#2D2D29" rx={3.5} ry={4} />
      <path
        fill="#2D2D29"
        d="M41.242 41.183C42.198 40.638 46.98 39 48.893 39c.957 7.642-4.782 8.733-6.695 7.642-1.53-.874-1.275-4.003-.956-5.459"
      />
    </svg>
  );
};
export default SvgFaceMelancholy;
