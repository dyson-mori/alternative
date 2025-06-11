import renderWithTheme, { screen } from '@utils/renderWithTheme';

import ProfileScreen from '../screen';

describe('ProfileScreen', () => {
  const mockUser = {
    user: {
      name: 'Sergio Junio',
      email: 'sergio@example.com',
    },
  };

  it('renderiza corretamente com os dados do usuário', () => {
    renderWithTheme(<ProfileScreen data={mockUser} />);

    expect(screen.getByText('Sergio Junio')).toBeInTheDocument();
  });
});
