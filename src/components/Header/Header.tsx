import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';

export default function Header() {
  const [region, setRegion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });

  return (
    <AppBar
      position="sticky"
      sx={{ px: 2, mb: 2, zIndex: 1300 }}
      elevation={scrollTrigger ? 4 : 0}
    >
      <Toolbar>
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value={10}>Poland</MenuItem>
            <MenuItem value={20}>USA</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}
