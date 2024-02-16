import {
  Toolbar,
  alpha,
  Typography,
  Tooltip,
  IconButton,
  Slider,
  Box,
  Button,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LineAxisIcon from '@mui/icons-material/LineAxis';

export function EnhancedTableToolbar(props: {
  numSelected: number;
  handleDeleteUsers: () => void;
  handleBlockedUsers: (isBlock: boolean) => void;
}) {
  const { numSelected, handleDeleteUsers } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
          }}
          component="div"
        >
          <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
            <Typography color="inherit" variant="subtitle1" component="div">
              Errors:
            </Typography>
            <Slider
              max={10}
              min={0}
              size="medium"
              valueLabelDisplay="auto"
              sx={{ maxWidth: 150 }}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              sx={{ maxWidth: 50, input: { textAlign: 'center' } }}
              type="number"
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Typography color="inherit" variant="subtitle1" component="div">
              Seed:
            </Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              sx={{ maxWidth: 70, input: { textAlign: 'center' } }}
              type="number"
            />
            <LineAxisIcon />
          </div>
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
      )}
      {numSelected > 0 && (
        <>
          <Tooltip title="Delete" onClick={handleDeleteUsers}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
}
