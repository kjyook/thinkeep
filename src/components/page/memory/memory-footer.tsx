'use client';

import SpeechInput from "@/components/form/speech-input";
import { useMemoryAnswerContext } from "@/lib/context/memory-answer-context";
import ChooseEmotion from "./choose-emotion";
import { useMemo } from "react";

const MemoryFooter = () => {
  const { answers: {state} } = useMemoryAnswerContext();

  const content = useMemo(() => {
    return (
      state === 1 
      ? <ChooseEmotion /> 
      : (
        state === 5 
        ? <>
          </>
        : <SpeechInput />
      )
    );
  }, [state]);

  return (
    <div className='flex flex-col items-center justify-center w-full h-auto'>
      {content}
    </div>
  );
};

export default MemoryFooter;