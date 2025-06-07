"use client"

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, Input } from "@components";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "@services/api";
import { Logo } from "@assets";

import { Container, Form, SignUp } from "./styles";
import { schema, schemaProps } from "./schema";

export default function LoginScreen() {
  const route = useRouter();

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'ssergiojunioleal@gmail.com',
      password: '123456789'
    },
    // mode: 'onChange'
  });

  async function submit(form: schemaProps) {
    setLoading(true);

    const data = await api.user.login(form);

    if (!data) {
      return setLoading(false);
    };

    return route.push('/profile');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(submit)}>
        <Logo width={175 / 1.5} height={155 / 1.5} />
        <Controller
          name='email'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input type="text" label="email" value={value ?? ''} onChange={onChange} />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input type="password" label="senha" value={value ?? ''} onChange={onChange} />
          )}
        />
        <div style={{ height: 10 }} />
        <Button
          type="submit"
          loading={loading}
          disabled={!isValid || loading}
        >Enviar</Button>
        <div style={{ height: 10 }} />

        <SignUp>
          <p>Você não tem um login? <Link href='/signup'>Clique aqui</Link></p>
        </SignUp>

      </Form>
    </Container>
  )
};
