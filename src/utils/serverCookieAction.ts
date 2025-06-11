"use server";

import { cookies } from "next/headers";

export async function setCookie(token: string) {
  const cookie = await cookies();

  cookie.set({
    name: 'porcupine-token',
    value: token,
    httpOnly: true,
    path: '/profile',
    maxAge: 120,
  });

  cookie.set({
    name: 'porcupine-logged',
    value: 'logged',
    path: '/login',
  });
};

export async function deleteCookie() {
  const cookie = await cookies();

  cookie.delete({ name: 'porcupine-token' });
  cookie.delete({ name: 'porcupine-logged' });
};