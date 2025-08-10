'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-web';

interface LottiePlayerProps {
  animationData: string;
}

const LottiePlayer = ({ animationData }: LottiePlayerProps) => {
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lottieContainerRef.current) return;

    const animation = Lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationData,
    });

    return () => animation.destroy();
  }, [animationData]);

  return (
    <div className='w-full h-full relative'>
      <div ref={lottieContainerRef} className='w-full h-full' />
    </div>
  );
};

export default LottiePlayer;
