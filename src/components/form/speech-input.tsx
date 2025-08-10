'use client';

import { useMemoryAnswerContext } from '@/lib/context/memory-answer-context';
import { SVGIcon } from '../ui/svg-icon';
import { useState } from 'react';

const SpeechInput = () => {
  const { answers, setAnswers } = useMemoryAnswerContext();
  const [ micEnabled, setMicEnabled ] = useState(true);

  const key = `q${answers.state}` as keyof typeof answers;

  const handleSpeechInput = (input: string) => {
    setAnswers((prev) => ({ ...prev, [key]: input }));
  };

  return(
    <div onClick={() => {}}>
      <SVGIcon 
        name='MicButton' 
        width={90} height={90} 
        viewBox='0 0 90 90' 
        fill={micEnabled ? 'primary' : 'gray2'}
      />
    </div>
  );
};

export default SpeechInput;
