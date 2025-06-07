import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .required('O e-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});


export type schemaProps = yup.InferType<typeof schema>;
