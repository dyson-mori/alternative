import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { jwtVerify } from 'jose';

// const PUBLIC_ROUTES = ['/login', '/signup'];
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!); // 1862eda0-dfa4-45e2-8147-e2f15b2d583e

export async function middleware() {
  const cookie = await cookies();
  const token = cookie.get('alternative-token');

  if (!token?.value) {
    return NextResponse.redirect(new URL('/login'));
  };

  const { payload } = await jwtVerify(token?.value!, JWT_SECRET);
  console.log({ payload });

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login', '/signup'],
};
