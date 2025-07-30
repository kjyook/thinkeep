import Input from '../form/input';
import LottieContainer from '../ui/lottie-container';

interface QuestionCardProps {
  text: React.ReactElement | string; //색상 적용을 위해 react element로 변경
  icon?: string; // lottie file path
  placeholder?: string; // placeholder to input, undifined -> not exist
}

const QuestionCard = ({ text, icon, placeholder }: QuestionCardProps) => {
  return (
    <div
      className="
      w-full h-auto p-4 bg-gray1
      rounded-2xl flex flex-col items-center justify-center gap-4
      "
    >
      <p className="sub1">{text}</p>
      {icon && <LottieContainer path={icon} />}
      {placeholder && <Input placeholder={placeholder} />}
    </div>
  );
};

export default QuestionCard;
