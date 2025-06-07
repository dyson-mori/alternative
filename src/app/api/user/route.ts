import { NextRequest, NextResponse } from "next/server";

import mocks from '../mocks.json';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const users = mocks.users.find(f => f.email === body.email);

  if (!!users) {
    return NextResponse.json(false, { status: 404, statusText: 'problems registering!' })
  };

  return NextResponse.json(true, { status: 201, statusText: 'user created successfully!' })
};