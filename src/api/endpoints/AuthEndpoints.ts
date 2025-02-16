const AuthEndpoints = {
  login: {
    method: 'POST',
    url: () => 'v1/login',
  },
  register: {
    method: 'POST',
    url: () => 'v1/register',
  },
} as const;

type AuthEndpoints = typeof AuthEndpoints

export type { AuthEndpoints };
export default AuthEndpoints;
