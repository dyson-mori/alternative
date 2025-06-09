"use client"

import { Suspense, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "@services/api";
import { Button, Input, Splash } from "@components";

import { ColorHeader, Container, Form, InputRow, SignIn } from "./styles";
import { schema, schemaProps } from "./schema";

type StatusProps = {
  loading: boolean;
  status: 'primary' | 'error';
  message?: string;
};

export default function RegisterScreen() {
  const route = useRouter();

  const [status, setStatus] = useState({ message: 'Registrar' } as StatusProps);

  const { control, handleSubmit, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
  });

  async function submit(form: schemaProps) {
    setStatus({ loading: true, status: 'primary' });

    const data = await api.user.register({ user: form });

    if (data.status !== 201) {
      return setStatus({ loading: false, status: 'error', message: data.message });
    };

    setStatus({ loading: false, status: 'primary', message: data.message });

    // await new Promise(resolve => setTimeout(resolve, 1000));

    return route.push('/login');
  };

  return (
    <Suspense fallback={<Splash />}>
      <Container>

        <ColorHeader />

        <Form onSubmit={handleSubmit(submit)}>
          <Controller
            name='name'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input label="Nome Completo" value={value ?? ''} onChange={onChange} />
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input label="Email" value={value ?? ''} onChange={onChange} />
            )}
          />
          <InputRow>
            <Controller
              name='password'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input type="password" label="Senha" value={value ?? ''} onChange={onChange} />
              )}
            />
            <Controller
              name='password_confirmation'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input type="password" label="Repita a Senha" value={value ?? ''} onChange={onChange} />
              )}
            />
          </InputRow>

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

          <SignIn>
            <p>Já tem uma conta? <Link href='/login'>Clique aqui</Link></p>
          </SignIn>

        </Form>
      </Container>
    </Suspense>
  )
};
