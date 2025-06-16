import { forwardRef } from "react";

import { SvgLogo } from "@assets";

import { Container } from "./styles";

type AnimatedProps = React.HTMLAttributes<HTMLDivElement>;

export const Animated = forwardRef<HTMLDivElement, AnimatedProps>(
  ({ ...rest }, ref) => (
    <Container ref={ref} {...rest}>
      {SvgLogo}
    </Container>
  )
);

Animated.displayName = 'Animated';