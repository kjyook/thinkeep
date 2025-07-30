'use client';

import React, { createContext, useContext, useState } from 'react';

interface Answers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  state: 1 | 2 | 3 | 4;
}

const defaultAnswers: Answers = {
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  state: 1,
};

const MemoryAnswerContext = createContext<{
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
} | null>(null);

export const MemoryAnswerProvider = ({ children }: { children: React.ReactNode }) => {
  const [answers, setAnswers] = useState<Answers>(defaultAnswers);

  return (
    <MemoryAnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </MemoryAnswerContext.Provider>
  );
};

export const useMemoryAnswerContext = () => {
  const ctx = useContext(MemoryAnswerContext);
  if (!ctx) throw new Error('useMemoryAnswerContext must be used within MemoryAnswerProvider');
  return ctx;
};
