import { NextRequest, NextResponse } from 'next/server';
import { api } from '@services/api';

const PUBLIC_ROUTES = ['/login', '/signup'];
const PRIVATE_ROUTES = ['/profile'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('porcupine-token')?.value;
  const logged = request.cookies.get('porcupine-logged')?.value;

  if (logged === 'logged') {
    return NextResponse.next();
  };

  // if (PUBLIC_ROUTES.includes(pathname)) {
  //   if (token) {
  //     try {
  //       const validation = await api.auth.validation();
  //       if (validation.status === 200) {
  //         return NextResponse.redirect(new URL('/profile', request.url));
  //       }
  //     } catch { }
  //   }

  //   return NextResponse.next();
  // }

  if (PRIVATE_ROUTES.includes(pathname)) {
    try {
      const validation = await api.auth.validation();
      console.log(validation);
      console.log(token);

      if (validation.status !== 200) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch {
      // return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/login', '/signup', '/profile'],
};
