import { NextResponse } from 'next/server';

// const PUBLIC_ROUTES = ['/login', '/signup'];
// const SECRET = process.env.JWT_SECRET as string;

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login', '/signup'],
};
