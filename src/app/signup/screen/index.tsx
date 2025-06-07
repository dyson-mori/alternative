"use client"

import { Suspense, useState } from "react";

import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "@services/api";
import { Button, Input, Splash } from "@components";

import { ColorHeader, Container, Form, InputRow } from "./styles";
import { schema, schemaProps } from "./schema";

type StatusProps = {
  loading: boolean;
  status: 'primary' | 'error';
};

export default function RegisterScreen() {
  const route = useRouter();

  const [status, setStatus] = useState({} as StatusProps);

  const { control, handleSubmit, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'sergio junio leal',
      email: 'ssergiojunioleal@gmail.com',
      password: '123456789',
      confirmPassword: '123456789',
    },
    // mode: 'onChange'
  });

  async function submit(form: schemaProps) {
    setStatus({ loading: true, status: 'primary' });

    const data = await api.user.register(form);

    if (Object.values(data)[0] === 404) {
      return setStatus({ loading: false, status: 'error' });
    };

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
              name='confirmPassword'
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
            {status.status === 'error' ? 'Tente Novamente' : 'Registrar'}
          </Button>
          <div style={{ height: 10 }} />

        </Form>
      </Container>
    </Suspense>
  )
};
