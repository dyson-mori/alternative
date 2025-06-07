import { NextResponse } from "next/server";

export async function POST() {
  const created = false;

  if (created) {
    return NextResponse.json(false, { status: 400, statusText: 'problems registering!' })
  };

  return NextResponse.json(true, { status: 201, statusText: 'user created successfully!' })
};