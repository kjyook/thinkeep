'use client';

import React, { createContext, useContext, useState } from 'react';

export interface Answers {
  q1: 'FaceNothing' | 'FaceHappy' | 'FaceGlad' | 'FaceSoso' | 'FaceMelancholy' | 'FaceSad' | 'FaceMad';
  q2: string;
  q3: string;
  q4: string;
  state: 1 | 2 | 3 | 4 | 5; // current question state
}

const defaultAnswers: Answers = {
  q1: 'FaceNothing',
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
