import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filter.slice';
import fakerUsersReducer from './slice/fakerUsers.slice';

export const store = configureStore({
  reducer: {
    filterReducer,
    fakerUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
