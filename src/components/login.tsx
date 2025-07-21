'use client';
import { signIn } from 'next-auth/react';

const LoginBtn = () => {
  return (
    <button className="bg-amber-500 w-full h-full" onClick={() => signIn('kakao')}>
      카카오 로그인
    </button>
  );
};
export default LoginBtn;
// , { callbackUrl: '/' }
