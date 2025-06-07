import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import theme from '@global/theme';

import RegisterScreen from '../page';

function renderWithTheme(ui: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe('<RegisterScreen />', () => {
  it('deve renderizar os campos corretamente', () => {
    renderWithTheme(<RegisterScreen />);

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/repita a senha/i)).toBeInTheDocument();
  });

  it('deve desabilitar o botão de envio se o formulário for inválido', () => {
    renderWithTheme(<RegisterScreen />);

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  it('deve habilitar o botão se o formulário estiver válido', async () => {
    renderWithTheme(<RegisterScreen />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/nome completo/i), 'Maria Teste');
    await user.type(screen.getByLabelText(/email/i), 'maria@email.com');
    await user.type(screen.getByLabelText(/senha/i), '123456');
    await user.type(screen.getByLabelText(/repita a senha/i), '123456');

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Aguarda validação do React Hook Form
    expect(submitButton).not.toBeDisabled();
  });
});
