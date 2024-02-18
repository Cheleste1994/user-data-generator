import { createSlice } from '@reduxjs/toolkit';
import createRandomUser from 'src/helpers/createRandomUsers';
import { RootState } from '../store';

export enum LocaleEnum {
  'en_US' = 'USA',
  'ru' = 'RU',
  'pl' = 'Poland',
}

export type Locale = keyof typeof LocaleEnum;

export interface UserState {
  index: number;
  uid: string;
  username?: string;
  phone?: string;
  address?: string;
}

export interface FakerUsersState {
  locale: Locale;
  errors: number;
  seed: number;
  page: number;
  usersState: UserState[];
}

const initialState: FakerUsersState = {
  locale: 'en_US',
  errors: 0,
  seed: 0,
  page: 1,
  usersState: [],
};

const fakerUsersSlice = createSlice({
  name: 'fakerUsers',
  initialState,
  reducers: {
    setFakerUsers: (state) => {
      if (state.usersState.length) return;

      const { locale, seed, usersState } = state;

      state.page = 1;

      state.usersState = createRandomUser<UserState>({
        locale,
        usersState,
        seed,
        page: 1,
      });
    },
    setSeed: (state, { payload }: { payload: number }) => {
      const { locale } = state;

      state.seed = payload;
      state.page = 1;

      state.usersState = createRandomUser<UserState>({
        locale,
        usersState: [],
        seed: payload,
        page: 1,
      });
    },
    setErrors: (state, { payload }: { payload: { errors: number } }) => {
      state.errors = payload.errors;
    },
    setLocale: (state, { payload }: { payload: Locale }) => {
      const { seed } = state;

      state.locale = payload;
      state.page = 1;

      state.usersState = createRandomUser<UserState>({
        locale: payload,
        usersState: [],
        seed,
        page: 1,
      });
    },
    infinityPaginations: (state, { payload }: { payload: number }) => {
      const { seed, locale, usersState } = state;

      state.page = payload;

      state.usersState = createRandomUser<UserState>({
        locale,
        usersState: usersState,
        seed,
        page: payload,
      });
    },
  },
});

export const getFakerUsersState = (state: RootState) => state.fakerUsersReducer;

export const {
  setFakerUsers,
  setSeed,
  setLocale,
  infinityPaginations,
  setErrors,
} = fakerUsersSlice.actions;

export default fakerUsersSlice.reducer;
