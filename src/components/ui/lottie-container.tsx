'use client';

import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

interface LottieContainerProps {
  path: string;
}

const LottieContainer = ({ path }: LottieContainerProps) => {
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieContainerRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path,
    });

    return () => animation.destroy();
  }, [path]);
  return <div ref={lottieContainerRef} className="w-full h-full" />;
};

export default LottieContainer;
