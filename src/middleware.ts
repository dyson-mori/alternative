// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { api } from '@services/api';

const PUBLIC_ROUTES = ['/login', '/signup'];
const PRIVATE_ROUTES = ['/profile'];

export async function middleware(request: NextRequest) {
  request.headers.set('cache-control', 'no-store');
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('porcupine-token')?.value;

  // 1. Acesso a rotas públicas (login/signup) → Redireciona para /profile se já estiver autenticado
  if (PUBLIC_ROUTES.includes(pathname)) {
    if (token) {
      try {
        const validation = await api.auth.validation();
        if (validation.status === 200) {
          return NextResponse.redirect(new URL('/profile', request.url));
        }
      } catch {
        // Token inválido, segue para rota pública normalmente
      }
    }

    return NextResponse.next(); // Não tem token ou token inválido
  }

  // 2. Acesso a rotas privadas → Valida token, se inválido redireciona para /login
  if (PRIVATE_ROUTES.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const validation = await api.auth.validation();
      if (validation.status !== 200) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next(); // Token válido
  }

  // 3. Rota fora das listas → permite o acesso (ajuste conforme necessário)
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/profile', '/login', '/signup'],
};
