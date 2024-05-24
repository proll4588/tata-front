import { providerApi } from './providerApi';

export interface GetOptionsResponse {
  categories: { id: number; title: string }[];
  types: {
    id: number;
    title: string;
  }[];
}

export interface RequestItem {
  id: number;
  user_id: number | null;
  status_id: number;
  phone_number: string;
  user_name: string;
  email: string;
  description: string | null;
  photo_type_id: number;
  photo_category_id: number;
  startDate: string;
  endDate: string;
  photo_url_id: number | null;
  price: number | null;
}

export interface ExtendedRequestItem extends RequestItem {
  statuses: {
    id: number;
    title: string;
    description: string | null;
  };
  photo_categorys: {
    id: number;
    title: string;
  };
  photo_types: {
    id: number;
    title: string;
  };
  photo_urls: {
    id: number;
    url: string;
    endDate: Date | null;
  } | null;
  users: {
    id: number;
    email: string;
  } | null;
}

export interface CreateRequestRequest {
  token?: string;
  data: Omit<
    RequestItem,
    'id' | 'user_id' | 'photo_url_id' | 'price' | 'status_id'
  >;
}

const requestApi = providerApi.injectEndpoints({
  endpoints: (build) => ({
    getOptions: build.query<GetOptionsResponse, void>({
      query: () => ({
        url: '/request/getRequestOptions',
        method: 'get',
      }),
    }),

    createRequest: build.mutation<RequestItem, CreateRequestRequest>({
      query: (body) => ({
        url: '/request/createRequest',
        method: 'post',
        body,
      }),
      invalidatesTags: ['request'],
    }),

    getUserRequests: build.query<
      {
        requests: ExtendedRequestItem[];
      },
      { token: string }
    >({
      query: (body) => ({
        url: '/request/getUserRequests',
        method: 'post',
        body,
      }),
      providesTags: ['request'],
    }),

    cancelUserRequest: build.mutation<RequestItem, { requestId: number }>({
      query: (body) => ({
        url: '/request/cancelRequest',
        method: 'post',
        body,
      }),
      invalidatesTags: ['request'],
    }),
  }),
});

export const {
  useGetOptionsQuery,
  useCreateRequestMutation,
  useGetUserRequestsQuery,
  useCancelUserRequestMutation,
} = requestApi;
