import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  getFakerUsersState,
  Locale,
  LocaleEnum,
  setLocale,
} from 'src/store/slice/fakerUsers.slice';

export default function Header() {
  const { locale } = useAppSelector(getFakerUsersState);

  const dispatch = useAppDispatch();

  const handleClick = (key: Locale) => {
    dispatch(setLocale(key));
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
            value={LocaleEnum[locale]}
            label="Region"
          >
            {Object.entries(LocaleEnum).map(([key, value]) => {
              return (
                <MenuItem
                  key={key + value}
                  value={value}
                  onClick={() => handleClick(key as Locale)}
                >
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}
