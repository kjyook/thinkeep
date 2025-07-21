//modal Id 등에 활용할 8자리 random number 생성 function
export const getRandomHex = () => {
  const hex = Math.floor(Math.random() * 0xffffffff)
    .toString(16)
    .padStart(8, '0');
  return hex;
};
