import React, { useRef } from 'react';
import renderWithTheme, { screen } from '@utils/renderWithTheme';
import { Animated } from '.';

jest.mock('@assets', () => ({
  SvgLogo: <svg data-testid="svg-logo" />,
}));

describe('Animated Component', () => {
  it('deve renderizar SvgLogo', () => {
    renderWithTheme(<Animated />);
    expect(screen.getByTestId('svg-logo')).toBeInTheDocument();
  });

  it('deve encaminhar ref para o elemento div', () => {
    const AnimatedWithRef = () => {
      const divRef = useRef<HTMLDivElement | null>(null);

      return (
        <>
          <Animated ref={divRef} data-testid="animated" />
          <button onClick={() => divRef.current?.classList.add('test-class')}>
            Add Class
          </button>
        </>
      );
    };

    renderWithTheme(<AnimatedWithRef />);
    const button = screen.getByText('Add Class');
    const animatedDiv = screen.getByTestId('animated');

    // Simula o clique que adiciona a classe via ref
    button.click();

    expect(animatedDiv).toHaveClass('test-class');
  });

  it('deve aceitar e aplicar propriedades div HTML', () => {
    renderWithTheme(<Animated className="my-class" data-testid="animated" />);
    expect(screen.getByTestId('animated')).toHaveClass('my-class');
  });
});
