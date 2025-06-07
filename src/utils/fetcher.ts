"use server";

// import { cookies } from "next/headers";

// interface FetcherParams {
//   url: string;
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   next?: RequestInit['next'];
//   body?: object;
//   cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'reload' | 'only-if-cached',
//   // body?: Record<string, object>;
//   cookie?: object;
//   header?: HeadersInit;
// }

type FetchProps = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'reload' | 'only-if-cached';
  body?: object;
};

const NEXT_URL = process.env.NEXT_PROJECT_URL;

const fetcher = async ({ method, url, cache, body }: FetchProps) => {
  const isBodyAllowed = method !== 'GET' && method !== 'DELETE';

  try {
    const res = await fetch(`${NEXT_URL}${url}`, {
      method,
      cache,
      ...(isBodyAllowed && body ? { body: JSON.stringify(body) } : {})
    });

    if (!res.ok) {
      // const errorText = await res.text();
      // console.error(`Fetch error (${res.status}): ${errorText}`);
      return [];
    };

    return await res.json()
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
}

export default fetcher;