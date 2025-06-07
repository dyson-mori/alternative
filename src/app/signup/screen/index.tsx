"use client"

import { Button, Input } from "@components";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { User } from "@assets";

import { ColorHeader, Container, Form, InputRow } from "./styles";
import { schema, schemaProps } from "./schema";

export default function RegisterScreen() {
  const { control, formState: { isValid } } = useForm<schemaProps>({
    resolver: yupResolver(schema),
    // defaultValues: {},
    // mode: 'onChange'
  });

  return (
    <Container>

      <ColorHeader />

      <Form>
        <Controller
          name='fullname'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input icon={User} label="Nome Completo" value={value ?? ''} onChange={onChange} />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input icon={User} label="Email" value={value ?? ''} onChange={onChange} />
          )}
        />
        <InputRow>
          <Controller
            name='password'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input icon={User} type="password" label="Senha" value={value ?? ''} onChange={onChange} />
            )}
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input icon={User} type="password" label="Repita a Senha" value={value ?? ''} onChange={onChange} />
            )}
          />
        </InputRow>
        <div style={{ height: 10 }} />
        <Button type="submit" disabled={!isValid}>Enviar</Button>
        <div style={{ height: 10 }} />

      </Form>
    </Container>
  )
};
