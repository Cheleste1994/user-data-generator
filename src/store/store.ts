import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slice/admin.slice';

export const store = configureStore({
  reducer: {
    adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
