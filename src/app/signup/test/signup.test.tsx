import { useRouter } from 'next/navigation';

import userEvent from '@testing-library/user-event';
import renderWithTheme, { screen, waitFor } from '@utils/renderWithTheme';

import { api } from '@services/api';

import RegisterScreen from '../screen';

// mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@services/api', () => ({
  api: {
    user: {
      register: jest.fn(),
    },
  },
}));

describe('RegisterScreen', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('faz o cadastro com sucesso e redireciona para /login', async () => {
    (api.user.register as jest.Mock).mockResolvedValue({
      status: 201,
      message: 'Usuário registrado com sucesso!',
    });

    renderWithTheme(<RegisterScreen />);

    const nameInput = screen.getByLabelText(/Nome Completo/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Senha/i);
    const repeatInput = screen.getByLabelText(/Repita/i);
    const submitButton = screen.getByRole('button', { name: /Registrar/i });

    await userEvent.type(nameInput, 'sergio junio leal');
    await userEvent.type(emailInput, 'supp.programming@gmail.com');
    await userEvent.type(passwordInput, '123456789');
    await userEvent.type(repeatInput, '123456789');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(api.user.register).toHaveBeenCalledWith({
        user: {
          name: 'sergio junio leal',
          email: 'supp.programming@gmail.com',
          password: '123456789',
          password_confirmation: '123456789'
        },
      });

      expect(push).toHaveBeenCalledWith('/login');
    });
  });

  it('mostra erro quando as credenciais são inválidas', async () => {
    (api.user.register as jest.Mock).mockResolvedValue({
      status: 422,
      message: 'Algo deu de errado ao tentar criar o usuário!',
    });

    renderWithTheme(<RegisterScreen />);

    await userEvent.type(screen.getByLabelText(/Nome Completo/i), 'fail leal');
    await userEvent.type(screen.getByLabelText(/Email/i), 'fail@example.com');
    await userEvent.type(screen.getByLabelText(/Senha/i), 'wrongpass');
    await userEvent.type(screen.getByLabelText(/Repita/i), 'wrongpass');
    await userEvent.click(screen.getByRole('button', { name: /Registrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Algo deu de errado ao tentar criar o usuário!/i)).toBeInTheDocument();
    });
  });
});
