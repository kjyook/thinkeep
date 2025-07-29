'use client';
import LoginButton from '@/components/page/login/login-button';
import React from 'react';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data, status } = useSession();
  return (
    <div>
      로그인 페이지입니다
      <br />
      <p>{data?.user?.name || '이름없음'} 님 환영</p>
      <p>로그인 상태: {status}</p>
      <LoginButton />
    </div>
  );
};
export default LoginPage;
