import { Toolbar, Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Seed from '../Seed/Seed';
import Errors from '../Errors/Errors';

export function TableToolbar() {
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
        <Errors />
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
