import NextAuth, { AuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import kakaoProvider from 'next-auth/providers/kakao';
import { prisma } from '@/lib/auth/prisma';

export const authOptions: AuthOptions = {
  providers: [
    kakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // 처음 로그인 시 DB에 사용자 저장
      if (account && profile) {
        const existingUser = await prisma.user.findUnique({
          where: { id: account.providerAccountId },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              id: account.providerAccountId,
              name: profile.name ?? '이름 없음',
              email: profile.email ?? '동의 안 함',
            },
          });
        }

        token.sub = account.providerAccountId;
        token.accessToken = account.access_token;
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
