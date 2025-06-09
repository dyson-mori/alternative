import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);
const PUBLIC_ROUTES = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;

  // const cookieStore = await cookies();
  // const token = cookieStore.get('porcupine-token');

  // if (PUBLIC_ROUTES.includes(pathname)) {
  //   if (token) {
  //     try {
  //       await jwtVerify(token.value, JWT_SECRET);
  //       return NextResponse.redirect(new URL('/profile', request.url));
  //     } catch {
  //       return NextResponse.next();
  //     }
  //   }
  //   return NextResponse.next();
  // }

  // if (!token) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  // try {
  //   await jwtVerify(token.value, JWT_SECRET);
  //   return NextResponse.next();
  // } catch {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

export const config = {
  matcher: ['/', '/profile', '/login', '/signup'],
};
