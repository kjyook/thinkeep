import { SVGProps } from 'react';

export type viewBoxSize = `${number} ${number} ${number} ${number}`;
export type svgIconProps = SVGProps<SVGSVGElement> & {
  width: number | string;
  height: number | string;
  viewBox?: viewBoxSize;
  fill?: string;
};
