'use client';

import QuestionCard from "@/components/sections/question-card";
import { SVGIcon } from "@/components/ui/svg-icon";
import { useMemoryAnswerContext } from "@/lib/context/memory-answer-context";
import { emotionMap } from "@/lib/emotion-map";
import { useMemo } from "react";
import questionList from "@/lib/question-list";

const MemoryContent = () => {
  const { answers, setAnswers } = useMemoryAnswerContext();
  const state = answers.state;
  
  const currentQuestion = useMemo(() => {
    const base = questionList[state];
    if (state === 1) {
      return {
        ...base,
        svgIcon: answers.q1,
        text: <p className={`${emotionMap[answers.q1].color} h-8`}>{emotionMap[answers.q1].text}</p>
      }
    }
    
    return {
      ...base,
    };
  }, [answers.q1, state])
  
  // return true -> disable false -> enable
  const rightArrowDisabled = useMemo(() => {
    if (answers.state === 1 && answers.q1 === 'FaceNothing') return true;

    const key = `q${answers.state}` as keyof typeof answers;

    return answers[key] === ''  //값이 없으면 disable(true) return
  }, [answers, state]);

  // arrow 클릭시 answers.state를 변경, 답변이 완료되지 않을시 right arrow disable
  const handleArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setAnswers((prev) => ({ ...prev, state: prev.state - 1 as typeof answers.state }));
    } else if (direction === 'right') {
      setAnswers((prev) => ({ ...prev, state: prev.state + 1 as typeof answers.state }));
    }
  }
  
  

  return (
    <>
      <div className='flex flex-row justify-between items-center w-full'>
        {answers.state > 1 
          ? <button
              onClick={() => handleArrowClick('left')}
              className=''
            >
              <SVGIcon 
                name='ArrowLeft' 
                width={48} height={48} 
                viewBox='0 0 48 48'
              />
            </button>
          : <div className="w-12 h-12"></div>
        }
        <QuestionCard
          title={currentQuestion?.title}
          svgIcon={currentQuestion!.svgIcon}
          lottieData={currentQuestion!.lottieData}
          placeholder={currentQuestion?.placeholder}
          text={currentQuestion?.text}
        />
        {answers.state < 5
          ? <button
            onClick={() => handleArrowClick('right')}
            disabled={rightArrowDisabled}
          >
            <SVGIcon 
              name='ArrowRight' 
              width={48} height={48} 
              viewBox='0 0 48 48' 
              fill={rightArrowDisabled ? 'gray2' : 'none'}
            />
          </button>
          : <div className="w-12 h-12"></div>
        }
      </div>
    </>
  );
};

export default MemoryContent;