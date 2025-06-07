"use client"

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
    <Container>
      {user.name}
    </Container>
  )
}