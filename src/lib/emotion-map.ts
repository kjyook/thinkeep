import { Answers } from "./context/memory-answer-context";

export const emotionMap: Record<Answers['q1'] , { text: string, color: string }> = {
  'FaceHappy': { text: '행복해요', color: 'text-primary'},
  'FaceGlad': { text: '기뻐요', color: 'text-primary'},
  'FaceSoso': { text: '그냥 그래요', color: 'text-primary'},
  'FaceMelancholy': { text: '우울해요', color: 'text-white'},
  'FaceSad': { text: '슬퍼요', color: 'text-blue'},
  'FaceMad': { text: '화나요', color: 'text-red'},
  'FaceNothing': { text: '', color: ''},
};