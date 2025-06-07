"use server";

import { cookies } from "next/headers";

export async function serveCookieAction(token: string) {
  const cookie = await cookies();

  cookie.set({
    name: 'alternative-token',
    value: token,
    // httpOnly: true,
    // path: '/login',
    maxAge: 60 * 60 * 24 * 1, // 7 dias
  })
}