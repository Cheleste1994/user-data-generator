import { Box } from '@mui/material';
import UsersTable from 'src/components/UsersTable/UsersTable';
import { useLayoutEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  getFakerUsersState,
  setFakerUsers,
} from 'src/store/slice/fakerUsers.slice';
import { getFilterState, setUsersFilter } from 'src/store/slice/filter.slice';

export default function MainPage() {
  const { usersState, page } = useAppSelector(getFakerUsersState);
  const users = useAppSelector(getFilterState);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(setFakerUsers());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(setUsersFilter(usersState));
  }, [usersState, dispatch]);

  const usersMemo = useMemo(() => users, [users]);
  const pageMemo = useMemo(() => page, [page]);

  return (
    <Box
      sx={{
        padding: {
          xs: 4,
          lg: 0,
        },
        width: 1,
        flex: 1,
      }}
    >
      <UsersTable users={usersMemo} page={pageMemo} />
    </Box>
  );
}
