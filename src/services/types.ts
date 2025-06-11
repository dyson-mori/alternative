type ResponseProps = {
  message: string;
  status: number;
  statsText: string;
};

type ResponseSignUpProps = ResponseProps & {
  data: Record<string, unknown>;
};

type ResponseLoginProps = ResponseProps & {
  token: string;
};

export type ApiProps = {
  profile: {
    data: () => Promise<UserData>;
  };
  auth: {
    validation: () => Promise<ResponseLoginProps>;
    logout: () => Promise<boolean>;
  };
  user: {
    login: (body: UserLoginPayload) => Promise<ResponseLoginProps>;
    register: (body: UserRegistrationPayload) => Promise<ResponseSignUpProps>;
  };
  header: {
    list: () => Promise<HeaderProps[]>;
  };
};
