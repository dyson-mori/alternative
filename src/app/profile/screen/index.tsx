"use client";

import { Suspense } from "react";

import { Splash } from "@components";

import { Container } from "./styles";

type UserLoginProps = {
  data: {
    user: {
      name: string;
      email: string;
      password: string;
    }
  }
};

export default function ProfileScreen({ data }: UserLoginProps) {
  return (
    <Suspense fallback={<Splash />}>
      <Container>
        {data.user.name}
      </Container>
    </Suspense>
  )
}