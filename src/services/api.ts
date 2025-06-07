import fetcher from "@utils/fetcher";

type RegisterError = {
  status: number;
  statusText: string;
};

type UserLoginProps = {
  name: string;
  email: string;
  password: string;
};

type UserResponse = boolean | string | RegisterError;

type ApiProps = {
  user: {
    login: (body: Pick<UserLoginProps, 'email' | 'password'>) => Promise<UserResponse>;
    register: (body: UserLoginProps) => Promise<UserResponse>;
    authentication: () => Promise<UserLoginProps>;
  };
};

export const api: ApiProps = {
  user: {
    login: (body) => fetcher({ url: '/user/auth', method: 'POST', body }),
    register: (body) => fetcher({ url: '/user', method: 'POST', body }),
    authentication: () => fetcher({ url: `/user/auth`, method: 'GET' }),
  }
};
