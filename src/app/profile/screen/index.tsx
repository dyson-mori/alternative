"use client";

import { Suspense } from "react";

import { Splash } from "@components";

import { Container } from "./styles";
import { UserLoginProps } from "./types";

export default function ProfileScreen({ data }: UserLoginProps) {
  return (
    <Suspense fallback={<Splash />}>
      <Container>
        <p>{data.user.name}</p>
      </Container>
    </Suspense>
  )
}