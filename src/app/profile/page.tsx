import type { Metadata } from "next";

import { api } from "@services/api";

import ProfileScreen from "./screen";

export async function generateMetadata(): Promise<Metadata> {
  const { user } = await api.profile.user();
  const first_name = user.name.split(' ')[0];

  return {
    title: "Bem Vindo " + first_name.charAt(0).toUpperCase() + first_name.slice(1)
  };
};

export default async function Profile() {
  const { user } = await api.profile.user();

  return <ProfileScreen user={user} />;
};
