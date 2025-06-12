'use server';

import { cookies } from 'next/headers';

export async function setCookie(token: string) {
  const cookieStore = await cookies();

  cookieStore.set('porcupine-token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60, // 1 minuto
  });

  cookieStore.set('porcupine-logged', 'logged', { path: '/' });
}

export async function deleteCookie() {
  const cookieStore = await cookies();

  cookieStore.delete('porcupine-token');
  cookieStore.delete('porcupine-logged');
}
