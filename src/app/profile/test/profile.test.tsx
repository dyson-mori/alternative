import renderWithTheme, { screen } from '@utils/renderWithTheme';

import ProfileScreen from '../screen';

describe('ProfileScreen', () => {
  const mockUser = {
    name: 'Sergio Junio',
    email: 'sergio@example.com',
  };

  it('Renderiza corretamente com os dados do usuário', () => {
    renderWithTheme(<ProfileScreen data={mockUser} />);

    expect(screen.getByText('Sergio Junio')).toBeInTheDocument();
  });
});
