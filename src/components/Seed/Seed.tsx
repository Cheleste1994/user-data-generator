import { Typography, TextField, Button } from '@mui/material';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { getFakerUsersState, setSeed } from 'src/store/slice/fakerUsers.slice';
import { useDeferredValue, useState } from 'react';

export default function Seed() {
  const { seed } = useAppSelector(getFakerUsersState);

  const [seedValue, setSeedValue] = useState(seed);

  const deferredSeedValue = useDeferredValue(seedValue);

  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    setSeedValue(value);
    dispatch(setSeed(value));
  };

  const handleClickRandom = () => {
    const value = Math.trunc(Math.random() * 10000000);
    setSeedValue(value);
    dispatch(setSeed(value));

    const r = Math.random();
    r.toExponential;
  };

  return (
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
        value={!deferredSeedValue ? '' : deferredSeedValue}
        onChange={handleChange}
      />
      <Button
        variant="text"
        startIcon={<LineAxisIcon />}
        size="small"
        onClick={handleClickRandom}
      />
    </div>
  );
}
