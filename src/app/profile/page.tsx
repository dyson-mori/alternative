import type { Metadata } from "next";

import { api } from "@services/api";

import ProfileScreen from "./screen";

export async function generateMetadata(): Promise<Metadata> {
  const user = await api.user.authentication();

  return {
    title: "Bem Vindo " + user.user.name,
  };
};

export default async function Login() {
  const user = await api.user.authentication();

  return <ProfileScreen data={user} />;
};
