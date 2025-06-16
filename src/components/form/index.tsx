import { forwardRef, ReactNode } from "react";

import { Container } from "./styles";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, ...rest }, ref) => (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  )
);

Form.displayName = 'Form';