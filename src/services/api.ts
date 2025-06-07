import fetcher from "@utils/fetcher";

type UserLoginProps = {
  name: string;
  email: string;
  password: string;
};

type ApiProps = {
  user: {
    login: (body: Pick<UserLoginProps, 'email' | 'password'>) => Promise<string>;
    authentication: (id: string) => Promise<UserLoginProps>;
  };
};

export const api: ApiProps = {
  user: {
    login: (body) => fetcher({ url: '/user/auth', method: 'POST', body }),
    authentication: (id) => fetcher({ url: `/user/auth?id=${id}`, method: 'GET' }),
  }
};
