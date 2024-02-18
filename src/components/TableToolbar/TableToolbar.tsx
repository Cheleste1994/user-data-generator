import { Toolbar, Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Seed from '../Seed/Seed';
import Errors from '../Errors/Errors';
import { useAppSelector } from 'src/store/hooks';
import { getFakerUsersState } from 'src/store/slice/fakerUsers.slice';
import { useMemo } from 'react';

export function TableToolbar() {
  const { errors } = useAppSelector(getFakerUsersState);

  const errorsMemo = useMemo(() => errors, [errors]);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}
        component="div"
      >
        <Errors errors={errorsMemo} />
        <Seed />
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            justifyContent: 'end',
          }}
          component="div"
        >
          <Button
            variant="contained"
            endIcon={<FileDownloadIcon />}
            size="small"
          >
            Export
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
}
