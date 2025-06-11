"use client"

import { Suspense, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, Input, Splash } from "@components";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { setCookie } from "@utils/serverCookieAction";
import { api } from "@services/api";

import { Container, Form, SignUp, SvgAnimated } from "./styles";
import { schema, schemaProps } from "./schema";

type StatusProps = {
  loading: boolean;
  status: 'primary' | 'error';
  message?: string;
};

const LogoIcon = ( // ao rodar os testes o svg quebrava
  <svg width="89" height="79" viewBox="0 0 89 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_915_775)">
      <path d="M6.49502 12.2503C4.76297 9.2503 6.92838 5.4997 10.3925 5.4997L76.21 5.50036C79.6741 5.50036 81.8393 9.24985 80.1075 12.2498L47.1983 69.2502C45.5203 72.1563 41.4042 72.247 39.5739 69.5223L39.4044 69.2496L6.49502 12.2503Z" stroke="#41B06E" strokeWidth="3" />
    </g>
    <defs>
      <filter id="filter0_d_915_775" x="0.383362" y="0" width="87.8358" height="79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.690196 0 0 0 0 0.431373 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_915_775" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_915_775" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default function LoginScreen() {
  const route = useRouter();

  const [status, setStatus] = useState({ message: 'Enviar' } as StatusProps);

  const { control, handleSubmit, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'ssergiojunioleal@gmail.com',
      password: '12345678'
    }
  });

  async function submit(form: schemaProps) {
    setStatus({ loading: true, status: 'primary' });

    const data = await api.user.login({ user: form });

    setCookie(data.token);

    if (data.status !== 200) {
      return setStatus({ loading: false, status: 'error', message: data.message });
    };

    return route.push('/profile');
  };

  return (
    <Suspense fallback={<Splash />}>
      <Container>
        <Form onSubmit={handleSubmit(submit)}>

          <SvgAnimated>
            {LogoIcon}
          </SvgAnimated>

          <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input type="text" label="Email" value={value ?? ''} onChange={onChange} />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input type="password" label="Senha" value={value ?? ''} onChange={onChange} />
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
