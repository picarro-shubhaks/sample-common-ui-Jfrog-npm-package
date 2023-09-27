import {
  ApiServerReducer,
  AuthAPISlice,
  CurrentUserReducer,
  ErrorSliceReducer,
} from '@picarro-common-ui/picarro-login-data-access';
import { configureStore } from '@reduxjs/toolkit';

import {
  adminPreferenceApi,
  UserReducer,
  UserStreamApiSlice,
} from '@picarro-common-ui/user-management-data-access';

import { combineReducers } from 'redux';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  apiServerStatus: ApiServerReducer,
  globalErrors: ErrorSliceReducer,
  user: UserReducer,
  [AuthAPISlice.reducerPath]: AuthAPISlice.reducer,
  [adminPreferenceApi.reducerPath]: adminPreferenceApi.reducer,
  [UserStreamApiSlice.reducerPath]: UserStreamApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      AuthAPISlice.middleware,
      adminPreferenceApi.middleware,
      UserStreamApiSlice.middleware
    ),

  devTools: true,
});
setupListeners(store.dispatch);
