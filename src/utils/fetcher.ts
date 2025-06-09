"use server";

import { cookies } from "next/headers";

type FetchProps = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'reload' | 'only-if-cached';
  body?: object;
};

const NEXT_URL = process.env.NEXT_RAILS_URL;

const fetcher = async ({ method, url, cache, body }: FetchProps) => {
  const cookie = await cookies();
  const token = cookie.get('porcupine-token');
  const isBodyAllowed = method !== 'GET' && method !== 'DELETE';

  try {
    const res = await fetch(`${NEXT_URL}${url}`, {
      method,
      cache,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(token?.value ? { 'Authorization': token.value } : undefined),
        // ...(token?.value ? { Cookie: cookie.toString() } : undefined)
      },
      ...(isBodyAllowed && body ? { body: JSON.stringify(body) } : {})
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return { status: res.status, ...data };
    };

    return {
      status: res.status,
      statsText: res.statusText,
      ...data
    };
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
    return error;
  }
}

export default fetcher;