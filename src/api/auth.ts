import { request } from "./fetcher";

interface ILoginResponse {
  id: string;
  email: string;
  name: string;
  token: string;
  createdAt: string;
}

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return request<ILoginResponse>({
    method: "POST",
    url: "/api/designer/login",
    auth: {
      username,
      password,
    },
  });
};

export const register = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  return request({
    method: "POST",
    url: "/api/designer/register",
    data: {
      username,
      email,
      password,
    },
  });
};
