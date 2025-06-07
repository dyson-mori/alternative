import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import jwt from 'jsonwebtoken';

import mocks from '../../mocks.json';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET() {
  const cookie = await cookies();
  const token = cookie.get('alternative-token')?.value;

  const verify = jwt.verify(token!, JWT_SECRET);

  const findUser = mocks.users.find(f => f.id === verify.sub);

  if (!findUser) {
    return NextResponse.json(false, { status: 400, statusText: 'problems registering!' })
  };

  return NextResponse.json(findUser, { status: 200, statusText: 'logged' })
};

export async function POST(request: NextRequest) {
  const body = await request.json();

  const findUser = mocks.users.find(f => f.email === body.email && f.password === body.password);

  if (!findUser) {
    return NextResponse.json('Usuário ou senha inválidos', {
      status: 401,
      statusText: 'problems when trying to login!',
    });
  };

  const token = jwt.sign({ sub: findUser.id }, JWT_SECRET!, { expiresIn: 60 * 60 * 24 * 1 });

  return NextResponse.json(token, { status: 200, statusText: 'logged' });
};