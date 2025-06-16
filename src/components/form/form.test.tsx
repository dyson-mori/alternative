import React, { useRef } from 'react';
import renderWithTheme, { screen, fireEvent } from '@utils/renderWithTheme';
import { Form } from '.';

jest.mock('@assets', () => ({
  SvgLogo: <svg data-testid="svg-logo" />,
}));

describe('Form Component', () => {
  it('deve renderizar corretamente', () => {
    renderWithTheme(
      <Form>
        <button>Submit</button>
      </Form>
    );
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('deve chamar onSubmit quando enviado', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());

    renderWithTheme(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.click(screen.getByText('Submit'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('deve encaminhar ref para o elemento do formulário', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());

    const FormWithRef = () => {
      const formRef = useRef<HTMLFormElement | null>(null);

      return (
        <Form onSubmit={handleSubmit} ref={formRef} data-testid="form">
          <button type="submit">Submit</button>
        </Form>
      );
    };

    renderWithTheme(<FormWithRef />);

    const formElement = screen.getByTestId('form');
    fireEvent.submit(formElement);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
