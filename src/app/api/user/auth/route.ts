import { NextRequest, NextResponse } from "next/server";

import mocks from '../../mocks.json';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") as string;

  const findUser = mocks.users.find(f => f.id === id);

  if (!findUser) {
    return NextResponse.json(false, { status: 400, statusText: 'problems registering!' })
  };

  return NextResponse.json(findUser, { status: 200, statusText: 'logged' })
};

export async function POST(request: NextRequest) {
  const body = await request.json();

  const findUser = mocks.users.find(f => f.email === body.email && f.password === body.password);

  if (!findUser) {
    return NextResponse.json(false, { status: 400, statusText: 'problems registering!' })
  };

  return NextResponse.json(findUser.id, { status: 200, statusText: 'logged' })
};