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

type FormatRailsBodyProps = {
  user: UserLoginProps
};

type ApiProps = {
  user: {
    login: (body: FormatRailsBodyProps) => Promise<UserResponse>;
    register: (body: FormatRailsBodyProps) => Promise<UserResponse>;
    authentication: () => Promise<FormatRailsBodyProps>;
  };
};

export const api: ApiProps = {
  user: {
    login: (body) => fetcher({ url: '/login', method: 'POST', body }),
    register: (body) => fetcher({ url: '/signup', method: 'POST', body }),
    authentication: () => fetcher({ url: `/me`, method: 'GET' }),
  }
};
