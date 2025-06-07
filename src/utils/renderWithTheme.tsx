import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@global/theme'; // ou onde estiver

const renderWithTheme = (ui: React.ReactElement, options = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);

export * from '@testing-library/react';

export { renderWithTheme };
