import { renderWithTheme, screen, waitFor, decodeToken } from '@utils/renderWithTheme';
import { useRouter } from 'next/navigation';

import ProfileScreen from '../screen';

// mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../utils/renderWithTheme', () => ({
  decodeToken: jest.fn(),
}));

describe('ProfileScreen', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    jest.clearAllMocks();
  });

  // it('se não houver token, redireciona para login', async () => {
  //   Object.defineProperty(window.document, 'cookie', {
  //     writable: true,
  //     value: '',
  //   });

  //   await waitFor(() => {
  //     expect(push).toHaveBeenCalledWith('/login');
  //   });
  // });

  it('se o token existir e for válido, renderiza a tela', async () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'porcupine-token=valid-token',
    });

    const user = { name: 'John Doe', email: 'jo@gmail.com' };

    (decodeToken as jest.Mock).mockReturnValue(user);

    renderWithTheme(<ProfileScreen data={{ user }} />);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });

  // it('se o token existir mas for inválido, redireciona para login', async () => {
  //   Object.defineProperty(window.document, 'cookie', {
  //     writable: true,
  //     value: 'porcupine-token=invalid-token',
  //   });

  //   (decodeToken as jest.Mock).mockImplementation(() => {
  //     throw new Error('Invalid token');
  //   });

  //   renderWithTheme(<ProfileScreen data={{ user: {} }} />);

  //   await waitFor(() => {
  //     expect(push).toHaveBeenCalledWith('/login');
  //   });
  // });
});
