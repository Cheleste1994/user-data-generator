import { Box } from '@mui/material';
import UsersTable from 'src/components/UsersTable/UsersTable';

export default function MainPage() {
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
      <UsersTable />
    </Box>
  );
}
