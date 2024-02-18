import { Toolbar, Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Seed from '../Seed/Seed';
import Errors from '../Errors/Errors';
import { useAppSelector } from 'src/store/hooks';
import {
  getFakerUsersState,
  UserState,
} from 'src/store/slice/fakerUsers.slice';
import { useMemo } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

export function TableToolbar({ users }: { users: UserState[] }) {
  const { errors } = useAppSelector(getFakerUsersState);

  const errorsMemo = useMemo(() => errors, [errors]);

  const handleClickExport = () => {
    const csvData = Papa.unparse(users, { delimiter: ';' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'export.csv');
  };

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
            onClick={handleClickExport}
          >
            Export
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
}
