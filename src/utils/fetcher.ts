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
  const isBodyAllowed = method !== 'GET' && method !== 'DELETE';

  try {
    const res = await fetch(`${NEXT_URL}${url}`, {
      method,
      cache,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': cookie.get('porcupine-token')!.value
        // Cookie: cookie.toString()
      },
      ...(isBodyAllowed && body ? { body: JSON.stringify(body) } : {})
    });

    if (!res.ok) {
      return { status: res.status, statsText: res.statusText };
    };

    return {
      status: res.status,
      statsText: res.statusText,
      ...(await res.json())
    };
  } catch (error) {
    // console.log("Erro ao buscar dados:", error);
    return error;
  }
}

export default fetcher;