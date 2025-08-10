'use client';

import { useMemoryAnswerContext } from '@/lib/context/memory-answer-context';

interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder }: InputProps) => {
  const { answers, setAnswers } = useMemoryAnswerContext();

  const key = `q${answers.state}` as keyof typeof answers;

  if (answers.state === undefined) {
    return <textarea placeholder={placeholder} className="w-full" />;
  } else {
    //여기는 memory page에서 응답하고 있는 section의 넘버를 받아와서 해당 section의 input을 담당하는 부분
    return (
      <textarea
        placeholder={placeholder}
        value={answers[key]}
        onChange={(e) => setAnswers((prev) => ({ ...prev, [key]: e.target.value }))}
        className="
        body1
        w-full h-[10rem] p-4 rounded-2xl bg-background 
        break-words overflow-auto resize-none text-white
        placeholder-gray2 placeholder:text-xl placeholder:font-semibold
        placeholder:leading-6
        "
      />
    );
  }
};

export default Input;
