import React, { useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@components';
import { api } from '@services/api';
import { Logo50, Logout } from '@assets';
import { deleteCookie } from '@utils/serverCookieAction';

import { Container, Nav, LinkStyle, Animated } from './styles';

type Props = {
  data: HeaderProps[];
};

export default function Header({ data }: Props) {
  const route = useRouter();
  const param = usePathname();

  const [loading, setLoading] = useState(false);

  const isLanding = param === '/profile';

  async function handleLogout() {
    setLoading(true);

    const verify = await api.auth.validation();

    if (verify.status === 200) {
      deleteCookie();
      route.push('/login');
    };

    setLoading(false);
  };

  return isLanding && (
    <Container>
      <Animated>
        <Logo50 id='header-svg' />
      </Animated>

      <Nav>
        {data.map((item, index) => (
          <LinkStyle key={index.toString()} $selected={param === item.param} href={item.param}>
            {item.title}
          </LinkStyle>
        ))}
      </Nav>

      <Button $variant='squad' loading={loading} onClick={handleLogout}>
        <Logout width={25} height={25} strokeWidth={2} />
      </Button>
    </Container>
  )
}
