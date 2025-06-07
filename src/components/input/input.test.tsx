import { renderWithTheme, screen, fireEvent } from '@utils/renderWithTheme';

import { Input } from '.';

describe('<Input />', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      label: 'Nome',
      value: '',
      onChange: jest.fn(),
      ...props,
    };

    renderWithTheme(<Input {...defaultProps} />);
    const input = screen.getByLabelText('Nome') as HTMLInputElement;

    return {
      input,
      ...defaultProps,
    };
  };

  it('deve renderizar o label e o input', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it('deve permitir digitação e chamar onChange', () => {
    const handleChange = jest.fn();
    const { input } = setup({ onChange: handleChange });

    fireEvent.change(input, { target: { value: 'Maria' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('deve exibir o valor corretamente', () => {
    const { input } = setup({ value: 'João' });
    expect(input.value).toBe('João');
  });
});
