import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .required('Nickname é obrigatório')
    .min(3, 'Mínimo 3 caracteres')
    .max(20, 'Máximo 20 caracteres'),
  email: yup
    .string()
    .required('O e-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória'),
});


export type schemaProps = yup.InferType<typeof schema>;
