import * as React from 'react';
import type { SVGProps } from 'react';
import { svgIconProps } from '../svg-icon.types';
export const SvgMicButton = ({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: svgIconProps) => {
  if(fill !== 'none') fill = 'fill' + fill;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...props}
    >
      <rect width={90} height={90} fill="#FFF782" className={fill} rx={45} />
      <mask
        id="mic-button_svg__a"
        width={73}
        height={73}
        x={9}
        y={9}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="#D9D9D9" d="M9.082 9.082h72.654v72.654H9.082z" />
      </mask>
      <g mask="url(#mic-button_svg__a)">
        <path
          fill="#090909"
          d="M45 50.828q-3.255 0-5.449-2.34t-2.195-5.682V23.809q0-3.153 2.228-5.36t5.412-2.208 5.415 2.208 2.233 5.36v18.997q0 3.342-2.195 5.682T45 50.828m-2.27 22.931V63.467q-8.022-.832-13.472-6.736T23.81 42.806h4.541q0 6.885 4.866 11.579 4.865 4.692 11.768 4.692t11.785-4.692 4.881-11.58h4.541q0 8.023-5.449 13.926-5.45 5.902-13.471 6.736v10.292z"
        />
      </g>
    </svg>
  );
};
export default SvgMicButton;
