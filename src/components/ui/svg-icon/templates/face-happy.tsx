import * as React from 'react';
import type { SVGProps } from 'react';
import { viewBoxSize } from '../svg-icon.types';
type svgIconProps = SVGProps<SVGSVGElement> & {
  width: number | string,
  heigth: number | string,
  viewBox?: viewBoxSize,
  fill?: string,
};
export const SvgFaceHappy = ({
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
      <ellipse cx={17.5} cy={41.5} fill="#FF7C68" rx={9.5} ry={8.5} />
      <ellipse cx={59.5} cy={53.5} fill="#FF7C68" rx={9.5} ry={8.5} />
      <path
        stroke="#2D2D29"
        strokeLinecap="round"
        strokeWidth={5}
        d="M35 35.407c-.5-2.667-3.8-6.9-13-2.5M58 40.407c-.5-2.667-3.8-6.9-13-2.5"
      />
    </svg>
  );
};
export default SvgFaceHappy;
