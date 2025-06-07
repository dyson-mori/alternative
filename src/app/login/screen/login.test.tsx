import { render, screen, fireEvent, waitFor } from '@utils/renderWithTheme';
// import { useRouter } from 'next/navigation';

// import { api } from '@services/api';

import LoginScreen from '.';

// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock('@services/api', () => ({
//   api: {
//     user: {
//       login: jest.fn(),
//     },
//   },
// }));

// jest.mock('@assets', () => ({
//   Logo: () => <div data-testid="logo" />,
// }));

it('renderiza inputs, botão e link corretamente', () => {
  render(<LoginScreen />);

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
});
