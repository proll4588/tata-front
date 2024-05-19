import { providerApi } from './providerApi';

export interface RegisterReq {
  email: string;
  password: string;
}

export interface RegisterRes {
  token: string;
}

const authApi = providerApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<RegisterRes, RegisterReq>({
      query: (body) => ({
        url: '/auth/register',
        method: 'post',
        body,
      }),
    }),

    login: build.mutation<RegisterRes, RegisterReq>({
      query: (body) => ({
        url: '/auth/login',
        method: 'post',
        body,
      }),
    }),

    loginAdmin: build.mutation<RegisterRes, RegisterReq>({
      query: (body) => ({
        url: '/auth/loginAdmin',
        method: 'post',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginAdminMutation, useLoginMutation } =
  authApi;
