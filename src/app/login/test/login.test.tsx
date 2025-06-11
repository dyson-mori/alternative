import { useRouter } from 'next/navigation';

import userEvent from '@testing-library/user-event';
import { screen, waitFor, renderWithTheme } from '@utils/renderWithTheme';

import { api } from '@services/api';

import { serveCookieAction } from '../actions';

import LoginScreen from '../screen';

// mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../services/api', () => ({
  api: {
    user: {
      login: jest.fn(),
    },
  },
}));

jest.mock('../actions', () => ({
  serveCookieAction: jest.fn(),
}));

describe('LoginScreen', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('faz login com sucesso e redireciona para /profile', async () => {
    (api.user.login as jest.Mock).mockResolvedValue({
      status: 200,
      token: 'fake-token',
      message: 'Login bem-sucedido',
    });

    renderWithTheme(<LoginScreen />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, '12345678');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(api.user.login).toHaveBeenCalledWith({
        user: {
          email: 'test@example.com',
          password: '12345678',
        },
      });

      expect(serveCookieAction).toHaveBeenCalledWith('fake-token');
      expect(push).toHaveBeenCalledWith('/profile');
    });
  });

  it('mostra erro quando as credenciais são inválidas', async () => {
    (api.user.login as jest.Mock).mockResolvedValue({
      status: 401,
      message: 'Credenciais inválidas',
    });

    renderWithTheme(<LoginScreen />);

    await userEvent.type(screen.getByLabelText(/Email/i), 'fail@example.com');
    await userEvent.type(screen.getByLabelText(/Senha/i), 'wrongpass');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Credenciais inválidas/i)).toBeInTheDocument();
    });
  });
});
