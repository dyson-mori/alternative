import { Suspense } from "react";
import type { Metadata } from "next";

import { api } from "@services/api";

import { Splash } from "@components";

import ProfileScreen from "./screen";

export async function generateMetadata(): Promise<Metadata> {
  const user = await api.user.authentication('79426b1a-d186-4366-aa18-f1f2159bc40b');

  return {
    title: "Bem Vindo " + user.name,
  };
};

export default async function Login() {
  const user = await api.user.authentication('79426b1a-d186-4366-aa18-f1f2159bc40b');

  return (
    <Suspense fallback={<Splash />}>
      <ProfileScreen user={user} />
    </Suspense>
  );
};
