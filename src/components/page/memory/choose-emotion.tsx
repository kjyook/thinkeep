'use client';

import { useMemoryAnswerContext } from "@/lib/context/memory-answer-context";
import { emotionMap } from "@/lib/emotion-map";
import { memo, useCallback } from "react";
import EmotionItem from "./emotion-item";

const ChooseEmotion = memo(() => {
  const { answers, setAnswers } = useMemoryAnswerContext();
  const q1 = answers.q1;
  
  console.log('ChooseEmotion', q1);

  const handleEmotion = useCallback((newEmotion: typeof q1) => {
    setAnswers((prev) => ({ ...prev, q1: prev.q1 === newEmotion ? 'FaceNothing' : newEmotion }))
  }, [setAnswers]);

  return (
    <>
    <div className='w-full grid grid-cols-3'>
      {Object.entries(emotionMap)
        .filter(([key]) => key !== 'FaceNothing')
        .map(([key, value]) =>(
          <EmotionItem
            key={key}
            name={key as keyof typeof emotionMap}
            text={value.text}
            onClick={() => handleEmotion(key as typeof q1)}
            selected={q1 === key}
          />
        ))}
    </div>
    </>
  );
});

export default ChooseEmotion;