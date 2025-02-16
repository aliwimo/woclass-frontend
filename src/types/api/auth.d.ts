export type LoginRequest = {
  email: string;
  password: string;
}

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export type authResponse = {
  token: string;
}
