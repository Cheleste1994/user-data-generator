import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserState } from './fakerUsers.slice';

const initialState: UserState[] = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setUsersFilter: (_, { payload }: { payload: UserState[] }) => [...payload],
    sortNumber: (state, { payload }: { payload: 'asc' | 'desc' }) => {
      if (payload === 'asc') {
        state = state.sort((a, b) => a.index - b.index);
      } else {
        state = state.sort((a, b) => b.index - a.index);
      }
    },
    sortID: (state, { payload }: { payload: 'asc' | 'desc' }) => {
      if (payload === 'asc') {
        state = state.sort((a, b) =>
          (a?.uid || '') < (b?.uid || '') ? -1 : 1
        );
      } else {
        state = state.sort((a, b) =>
          (a?.uid || '') > (b?.uid || '') ? -1 : 1
        );
      }
    },
    sortName: (state, { payload }: { payload: 'asc' | 'desc' }) => {
      if (payload === 'asc') {
        state = state.sort((a, b) =>
          (a?.username || '') < (b?.username || '') ? -1 : 1
        );
      } else {
        state = state.sort((a, b) =>
          (a?.username || '') > (b?.username || '') ? -1 : 1
        );
      }
    },
    sortAddress: (state, { payload }: { payload: 'asc' | 'desc' }) => {
      if (payload === 'asc') {
        state = state.sort((a, b) =>
          (a?.address || '') < (b?.address || '') ? -1 : 1
        );
      } else {
        state = state.sort((a, b) =>
          (a?.address || '') > (b?.address || '') ? -1 : 1
        );
      }
    },
    sortPhone: (state, { payload }: { payload: 'asc' | 'desc' }) => {
      if (payload === 'asc') {
        state = state.sort((a, b) =>
          (a?.phone || '') < (b?.phone || '') ? -1 : 1
        );
      } else {
        state = state.sort((a, b) =>
          (a?.phone || '') > (b?.phone || '') ? -1 : 1
        );
      }
    },
  },
});

export const {
  sortAddress,
  sortID,
  sortName,
  sortNumber,
  sortPhone,
  setUsersFilter,
} = filterSlice.actions;

export const getFilterState = (state: RootState) => state.filterReducer;

export default filterSlice.reducer;
