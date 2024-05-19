import { Email, Password } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RegFromFields, RegFromProps } from './type';

export const RegFrom: FC<RegFromProps> = ({
  onSubmit,
  renderActions,
  isError = false,
}) => {
  const { control, handleSubmit } = useForm<RegFromFields>();

  return (
    <Grid
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      container
      flexDirection={'column'}
      gap={2}
      pt={1}
    >
      <Controller
        control={control}
        name='email'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            label='Email'
            placeholder='Введите вашу почту'
            required
            type='email'
            error={isError}
            InputProps={{
              startAdornment: (
                <Email
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            label='Пароль'
            placeholder='Введите пароль'
            required
            type='password'
            error={isError}
            InputProps={{
              startAdornment: (
                <Password
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />

      {renderActions()}
    </Grid>
  );
};
