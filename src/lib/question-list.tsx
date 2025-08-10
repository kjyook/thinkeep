import { QuestionCardProps } from "@/components/sections/question-card"


const questionList: Record<number, QuestionCardProps> = {
  1 : {
    title: <p className='sub1 text-center'>오늘 <span className='text-primary'>기분</span>이 어때요?</p>,
    svgIcon: 'FaceNothing',  //초기값, 다시 바뀔것
    placeholder: undefined,
    text: undefined //얘도 초기값, 다시 바뀔것
  },
  2 : {
    title: <p className='sub1 text-center'><span className='text-primary'>오늘 누구</span>와<br /> 시간을 보내셨나요?</p>,
    placeholder: '마이크를 눌러 답해보세요',
    text: undefined,
    lottieData: '/lottie/with-who.json'
  },
  3 : {
    title: <p className='sub1 text-center'><span className='text-primary'>오늘 먹은 음식</span> 중 가장 인상<br /> 깊었던 건 무엇인가요?</p>,
    placeholder: '마이크를 눌러 답해보세요',
    text: undefined,
    lottieData: '/lottie/eat-food.json'
  },
  4 : {
    title: <p className='sub1 text-center'><span className='text-primary'>오늘 꼭 기억하고 싶은<br />순간</span>은 무엇인가요?</p>,
    placeholder: '마이크를 눌러 답해보세요',
    text: undefined,
    lottieData: '/lottie/special-moment.json'
  },
  5 : { //마지막 마무리 section은 그냥 따로 구현하는게 좋을지도
    title: undefined,
    placeholder: undefined,
    text: <p>오늘 하루가 <br /> 추억되었어요!</p>,
    lottieData: '/lottie/complete-memory.json'
  }
};

export default questionList;