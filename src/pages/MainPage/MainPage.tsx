import { Box } from '@mui/material';
import UsersTable from 'src/components/UsersTable/UsersTable';

export default function MainPage() {
  return (
    <Box
      sx={{
        padding: {
          xs: 2,
          lg: 0,
        },
      }}
    >
      <UsersTable />
    </Box>
  );
}
