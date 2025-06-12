export { };

declare global {
  type HeaderProps = {
    title: string;
    param: string;
    enable: boolean;
  };

  type FetchProps = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'reload' | 'only-if-cached';
    body?: object;
  };

  type UserData = {
    user: {
      name: string;
      email: string;
    }
  };

  type UserRegistrationPayload = {
    user: {
      name: string;
      email: string;
      password: string;
    };
  };

  type UserLoginPayload = {
    user: {
      email: string;
      password: string;
    };
  };
}
