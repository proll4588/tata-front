import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_API_URL = 'http://127.0.0.1:3210/api';
const BASE_API_URL = 'http://151.248.115.92:3210/api';

export const providerApi = createApi({
  reducerPath: 'providerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  tagTypes: ['request'],
  endpoints: () => ({}),
});
