import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@global/theme'; // ou onde estiver

const renderWithTheme = (ui: React.ReactElement, options = {}) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export * from '@testing-library/react';

export function decodeToken(token: string) {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
};

export default renderWithTheme;