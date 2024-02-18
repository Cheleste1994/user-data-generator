import { Typography, TextField, Slider } from '@mui/material';
import { memo } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import { setErrors } from 'src/store/slice/fakerUsers.slice';

export default memo(function Errors({ errors }: { errors: number }) {
  const dispatch = useAppDispatch();

  const handleChangeSlider = (value: number) => {
    dispatch(setErrors({ errors: value }));
  };

  const handleChangeField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    dispatch(setErrors({ errors: Math.min(value, 1000) }));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
      <Typography color="inherit" variant="subtitle1" component="div">
        Errors:
      </Typography>
      <Slider
        max={10}
        step={0.25}
        min={0}
        size="medium"
        valueLabelDisplay="auto"
        value={Math.min(errors, 10)}
        sx={{ maxWidth: 150 }}
        onChange={(_, value) => handleChangeSlider(Number(value))}
      />
      <TextField
        id="standard-basic"
        variant="standard"
        size="small"
        sx={{ maxWidth: 50, input: { textAlign: 'center' } }}
        type="number"
        value={errors}
        onChange={handleChangeField}
      />
    </div>
  );
});
