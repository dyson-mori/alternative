import fetcher from "@utils/fetcher";

import { ApiProps } from "./types";

export const api: ApiProps = {
  header: {
    list: () => fetcher({ url: `/header`, method: 'GET', cache: 'force-cache' })
  },
  profile: {
    data: () => fetcher({ url: `/me`, method: 'GET' }),
  },
  auth: {
    validation: () => fetcher({ url: '/validate_token', method: 'GET' }),
    logout: () => fetcher({ url: '/logout', method: 'DELETE' })
  },
  user: {
    login: (body) => fetcher({ url: '/login', method: 'POST', body }),
    register: (body) => fetcher({ url: '/signup', method: 'POST', body }),
  },
};
