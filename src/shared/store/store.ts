import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { providerApi } from '../api/providerApi';

export const store = configureStore({
  reducer: {
    //   currentCitySlice: currentCityReduce,
    //   isAuthSlice: isAuthReduce,
    //   localBasketSlice: localBasketReducer,
    [providerApi.reducerPath]: providerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      providerApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
