import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Box,
} from '@mui/material';
import { memo, useDeferredValue, useState } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import {
  infinityPaginations,
  UserState,
} from 'src/store/slice/fakerUsers.slice';
import {
  sortAddress,
  sortID,
  sortName,
  sortNumber,
  sortPhone,
} from 'src/store/slice/filter.slice';
import { TableToolbar } from '../TableToolbar/TableToolbar';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './scroll.module.css';

const HEADER_TABLE = ['Number', 'ID', 'Name', 'Address', 'Phone'];

export default memo(function UsersTable({
  users,
  page,
}: {
  users: UserState[];
  page: number;
}) {
  const deferredUsers = useDeferredValue(users);

  const dispatch = useAppDispatch();

  const [sort, setSort] = useState<{
    index: number;
    order: 'asc' | 'desc';
  }>({ index: 0, order: 'asc' });

  const handleSort = (index: number) => {
    const orderBy = sort.order === 'asc' ? 'desc' : 'asc';

    switch (HEADER_TABLE[index]) {
      case 'Number':
        dispatch(sortNumber(orderBy));
        break;
      case 'ID':
        dispatch(sortID(orderBy));
        break;
      case 'Name':
        dispatch(sortName(orderBy));
        break;
      case 'Address':
        dispatch(sortAddress(orderBy));
        break;
      case 'Phone':
        dispatch(sortPhone(orderBy));
        break;
      default:
    }
    setSort({ index, order: orderBy });
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.target) {
      const { scrollTop, offsetHeight, scrollHeight } =
        event.target as HTMLElement;
      if (scrollTop + offsetHeight + 2 >= scrollHeight) {
        dispatch(infinityPaginations(page + 1));
      }
    }
  };

  return (
    <>
      <TableToolbar />
      <TableContainer
        component={Paper}
        sx={{ width: '100%', height: '700px' }}
        onScroll={handleScroll}
        className={styles.scroll}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {HEADER_TABLE.map((title, index) => (
                <TableCell
                  key={index + title}
                  align={'center'}
                  padding={'normal'}
                  sortDirection={false}
                >
                  <TableSortLabel
                    active={index === sort.index}
                    direction={index === sort.index ? sort.order : 'asc'}
                    onClick={() => {
                      handleSort(index);
                    }}
                  >
                    {title}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {deferredUsers.map((user, index) => (
              <TableRow
                key={user.uid + index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {user.index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.uid}
                </TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="left">{`${user.phone}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <LinearProgress />
        </Box>
      </TableContainer>
    </>
  );
});
