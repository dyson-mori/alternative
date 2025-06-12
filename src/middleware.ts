import { NextRequest, NextResponse } from 'next/server';
import { api } from '@services/api';

const PUBLIC_ROUTES = ['/login', '/signup'];
const PRIVATE_ROUTES = ['/profile'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('porcupine-token')?.value;
  const logged = request.cookies.get('porcupine-logged')?.value;

  const isPublic = PUBLIC_ROUTES.includes(pathname);
  const isPrivate = PRIVATE_ROUTES.includes(pathname);

  const isTokenInvalid = !token || token === 'null';
  const isNotLogged = logged !== 'logged';

  if (isPrivate && isNotLogged && isTokenInvalid) {
    return redirectToLogin(request);
  }

  if (isPublic && logged === 'logged') {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (isPrivate && isNotLogged) {
    return redirectToLogin(request);
  }

  if (isPrivate && isTokenInvalid && logged === 'logged') {
    return clearCookiesAndRedirect(request);
  }

  if (isPrivate && logged === 'logged') {
    try {
      const validation = await api.auth.validation();
      if (validation.status !== 200) {
        return clearCookiesAndRedirect(request);
      }
    } catch {
      return clearCookiesAndRedirect(request);
    }
  }

  return NextResponse.next();
}

function redirectToLogin(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url));
}

function clearCookiesAndRedirect(request: NextRequest) {
  const response = redirectToLogin(request);
  response.cookies.set('porcupine-logged', '', { maxAge: 0, path: '/' });
  response.cookies.set('porcupine-token', '', { maxAge: 0, path: '/' });
  return response;
}

export const config = {
  matcher: ['/login', '/signup', '/profile'],
};
