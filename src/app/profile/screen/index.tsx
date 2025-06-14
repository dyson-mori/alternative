"use client";

import { Suspense } from "react";

import { Splash } from "@components";

import { Container } from "./styles";

type Props = {
  data: UserData;
};

export default function ProfileScreen({ data }: Props) {
  return (
    <Suspense fallback={<Splash />}>
      <Container>
        <p>{data.name}</p>
      </Container>
    </Suspense>
  )
}