import { lazy, Suspense, useMemo } from 'react';
import { IconRegistryKey, SVGIconRegistry } from './svg-icon.registry';
import { viewBoxSize } from './svg-icon.types';

export type SVGIconProps = {
  name: IconRegistryKey;
  width: string | number;
  height: string | number;
  viewBox?: viewBoxSize;
  fill?: string;
  onClick?: (...args: any) => void;
} & React.HTMLAttributes<SVGSVGElement>;

const placeHolder = ({ width, height }: { width: string | number; height: string | number }) => {
  let _width: string;
  let _height: string;

  if (typeof width === 'number' && typeof height === 'number') {
    _width = `${width}px`;
    _height = `${height}px`;
  } else {
    _width = width as string;
    _height = height as string;
  }

  _width = 'w-[' + _width + ']';
  _height = 'h-[' + _height + ']';

  return <div className={`${_width} ${_height}`}></div>;
};

export const SVGIcon = ({
  name,
  width,
  height,
  viewBox,
  fill,
  onClick,
  ...props
}: SVGIconProps) => {
  const IconComponent = useMemo(() => lazy(SVGIconRegistry[name]), [name]);
  const FallbackPlaceHolder = useMemo(() => placeHolder({ width, height }), [width, height]);

  return (
    <Suspense fallback={FallbackPlaceHolder}>
      <IconComponent
        width={width}
        height={height}
        viewBox={viewBox}
        {...props}
        fill={fill}
        onClick={onClick}
      />
    </Suspense>
  );
};

export default SVGIcon;
