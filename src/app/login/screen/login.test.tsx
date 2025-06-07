import { render, screen } from '@utils/renderWithTheme';

import LoginScreen from '.';

describe('<LoginScreen />', () => {
  it('renderiza inputs, botão e link corretamente', () => {
    render(<LoginScreen />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
    expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
  });
});
