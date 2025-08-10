import { SVGIcon } from "@/components/ui/svg-icon"
import { emotionMap } from "@/lib/emotion-map";
import { memo } from "react";

interface EmotionItemProps {
  name: keyof typeof emotionMap;
  text: string;
  onClick: () => void;
  selected: boolean;
}

const EmotionItem = ({
  name,
  text,
  onClick,
  selected,
}: EmotionItemProps) => {
  console.log('EmotionItem', name, text, selected);
  return (
    <div
      className='flex flex-col items-center justify-center cursor-pointer'
      onClick={onClick}
    >
      <SVGIcon
        name={name}
        width={88} height={88} viewBox='0 0 88 88'
        fill={selected ? undefined : 'gray3'}
      />
      <p className='body3'>{text}</p>
    </div>
  );
};

export default memo(EmotionItem); //다른 icon들 바뀔때 re-render 방지