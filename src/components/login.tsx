'use client';
import { signIn } from 'next-auth/react';

const LoginBtn = () => {
  return (
    // callbackUrl은 로그인 이후 리다이렉트할 URL을 지정
    <button
      className="bg-amber-500 w-full h-full"
      onClick={() => signIn('kakao', { callbackUrl: '/' })}
    >
      카카오 로그인
    </button>
  );
};
export default LoginBtn;
