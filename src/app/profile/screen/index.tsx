"use client"
import { Suspense } from "react";

import { Splash } from "@components";

import { Container } from "./styles";

type UserLoginProps = {
  user: {
    name: string;
    email: string;
    password: string;
  }
};

export default function ProfileScreen({ user }: UserLoginProps) {
  return (
    <Suspense fallback={<Splash />}>
      <Container>
        {user.name}
      </Container>
    </Suspense>
  )
}