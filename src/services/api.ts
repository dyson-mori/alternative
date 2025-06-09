import fetcher from "@utils/fetcher";

type FormatRailsBodyProps = {
  user: {
    name: string;
    email: string;
    password: string;
  }
};

type FormatRailsLoginBodyProps = {
  user: {
    email: string;
    password: string;
  }
};

type FetchResponseSignUpProps = {
  message: string;
  status: number;
  statsText: string;
  data: object
};

type FetchResponseLoginProps = {
  message: string;
  status: number;
  statsText: string;
  token: string;
};

type ApiProps = {
  profile: {
    data: () => Promise<FormatRailsBodyProps>;
  };
  auth: {
    validation: () => Promise<FetchResponseLoginProps>;
  };
  user: {
    login: (body: FormatRailsLoginBodyProps) => Promise<FetchResponseLoginProps>;
    register: (body: FormatRailsBodyProps) => Promise<FetchResponseSignUpProps>;
  };
};

export const api: ApiProps = {
  profile: {
    data: () => fetcher({ url: `/me`, method: 'GET', cache: 'no-store', }),
  },
  auth: {
    validation: () => fetcher({ url: '/auth/validate_token', method: 'GET', cache: 'no-store', }),
  },
  user: {
    login: (body) => fetcher({ url: '/login', method: 'POST', body, cache: 'no-store', }),
    register: (body) => fetcher({ url: '/signup', method: 'POST', body }),
  }
};
