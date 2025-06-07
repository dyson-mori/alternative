import { renderWithTheme, screen, fireEvent } from '@utils/renderWithTheme';

import { Button } from '.';

describe('<Button />', () => {
  it('renderiza com tema Primary', () => {
    renderWithTheme(<Button $variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });

  it('renderiza com tema Error', () => {
    renderWithTheme(<Button $variant="error">Erro</Button>);
    expect(screen.getByText('Erro')).toBeInTheDocument();
  });

  it('executa função ao clicar', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Clique</Button>);
    fireEvent.click(screen.getByText('Clique'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renderiza conteúdo de loading quando loading=true', () => {
    renderWithTheme(<Button loading>Carregando</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button').innerHTML).toMatch(/lds-dual-ring/);
  });

  it('fica desabilitado quando loading=true mesmo que não tenha disabled=true', () => {
    renderWithTheme(<Button loading>Processando</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('fica desabilitado quando disabled=true', () => {
    renderWithTheme(<Button disabled>Desabilitado</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
