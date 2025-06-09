"use client"

import { Suspense, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, Input, Splash } from "@components";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "@services/api";
import { Logo } from "@assets";

import { Container, Form, SignUp } from "./styles";
import { schema, schemaProps } from "./schema";
import { serveCookieAction } from "../actions";

type StatusProps = {
  loading: boolean;
  status: 'primary' | 'error';
  message?: string;
};

export default function LoginScreen() {
  const route = useRouter();

  const [status, setStatus] = useState({ message: 'Enviar' } as StatusProps);

  const { control, handleSubmit, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    },
  });

  async function submit(form: schemaProps) {
    setStatus({ loading: true, status: 'primary' });

    const data = await api.user.login({ user: form });

    if (Object.values(data)[0] === 401) {
      return setStatus({ loading: false, status: 'error', message: 'Tente Novamente' });
    };

    serveCookieAction(data.token as string);

    setStatus({ loading: false, status: 'primary', message: data.message });

    await new Promise(resolve => setTimeout(resolve, 1000));

    return route.push('/profile');
  };

  return (
    <Suspense fallback={<Splash />}>
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
            $variant={status.status}
            loading={status.loading}
            disabled={!isValid || status.loading}
          >
            {status.message}
          </Button>

          <div style={{ height: 10 }} />

          <SignUp>
            <p>Você não tem um login? <Link href='/signup'>Clique aqui</Link></p>
          </SignUp>

        </Form>
      </Container>
    </Suspense>
  )
};
