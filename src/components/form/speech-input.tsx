'use client';

import { useMemoryAnswerContext } from '@/lib/context/memory-answer-context';

const SpeechInput = () => {
  const { answers, setAnswers } = useMemoryAnswerContext();

  const key = `q${answers.state}` as keyof typeof answers;

  const handleSpeechInput = (input: string) => {
    setAnswers((prev) => ({ ...prev, [key]: input }));
  };

  return <></>;
};

export default SpeechInput;
