"use client";

import { Suspense } from "react";

import { Splash } from "@components";

import { Container } from "./styles";

export default function ProfileScreen({ user }: UserData) {
  return (
    <Suspense fallback={<Splash />}>
      <Container>
        <p>{user.name}</p>
      </Container>
    </Suspense>
  )
}