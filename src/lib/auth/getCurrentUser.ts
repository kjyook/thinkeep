import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/auth/prisma';

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

    // 유저 ID 정보가 없으면 null 반환
    if (!session?.user?.id) {
      return null;
    }

    // DB에서 해당 ID를 가진 유저 정보 조회
    const currentUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    // 잘못된 유저 ID인 경우 로그인 X
    if (!currentUser) {
      return null;
    }

    // 유저 정보를 반환
    return currentUser;
  } catch (error) {
    // 오류가 발생한 경우 null 반환
    return null;
  }
}
