'use client';

import Input from '../form/input';
import LottiePlayer from '../ui/lottie-player';
import { SVGIcon, SVGIconRegistry } from '../ui/svg-icon';

export interface QuestionCardProps {
  title?: React.ReactElement; //색상 적용을 위해 react element로 변경
  svgIcon?: keyof typeof SVGIconRegistry;
  lottieData?: string;
  placeholder?: string; // placeholder to input, undifined -> not exist
  text?: React.ReactElement;  //text to question emotion
}

const QuestionCard = ({ title, svgIcon, lottieData, placeholder, text }: QuestionCardProps) => {
  return (
    <div
      className="
      w-full h-auto p-4 bg-gray1
      rounded-2xl flex flex-col items-center justify-center gap-4
      "
    >
      {title}
      {svgIcon && <SVGIcon name={svgIcon} width={185} height={185} viewBox={svgIcon === 'FaceNothing' ? '0 0 185 185' : '0 0 88 88'} />}
      {lottieData && <LottiePlayer animationData={lottieData} />}
      {placeholder && <Input placeholder={placeholder} />}
      {text && <p className='sub1'>{text}</p>}
    </div>
  );
};

export default QuestionCard;
