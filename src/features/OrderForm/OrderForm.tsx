import { Person, Phone, Email, Place, TypeSpecimen } from '@mui/icons-material';
import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { OrderFormProps, OrderFormFields } from './type';
import { PHONE_NUMBER_VALIDATOR } from './validation';
import { useGetOptionsQuery } from '../../shared/api/requestApi';
import { DateTimePicker } from '@mui/x-date-pickers';

export const OrderForm: FC<OrderFormProps> = ({ onSubmit, renderActions }) => {
  const { control, handleSubmit } = useForm<OrderFormFields>();
  const { data, isLoading } = useGetOptionsQuery();

  return (
    <Grid
      component={'form'}
      onSubmit={handleSubmit(onSubmit, console.log)}
      container
      flexDirection={'column'}
      gap={2}
      pt={1}
    >
      <Controller
        control={control}
        name='name'
        rules={{ required: true, maxLength: 30 }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Имя'
            placeholder='Как вас зовут'
            required
            value={value}
            error={!!error}
            helperText={error?.message || 'Мне достаточно просто вашего имени'}
            InputProps={{
              startAdornment: (
                <Person
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='phone'
        rules={{ required: true, pattern: PHONE_NUMBER_VALIDATOR }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Номер телефона'
            // placeholder='Введите свой номер телефона'
            placeholder='XXX XXX XXXX'
            required
            value={value}
            type='tel'
            prefix='+7'
            error={!!error}
            helperText={
              error?.message ||
              'Будьте на связи, чтобы я смогла с вами связаться'
            }
            InputProps={{
              startAdornment: (
                <>
                  <Phone
                    sx={{ mr: 1 }}
                    color='action'
                  />
                  <Typography
                    mr={1}
                    color={'grey'}
                  >
                    +7{' '}
                  </Typography>
                </>
              ),
            }}
            variant='standard'
            onChange={(e) => {
              const newVal = e.target.value.replace(/\D/g, '');
              //   if (/\d/.test(newVal[newVal.length - 1]))
              //     onChange(newVal.slice(0, -1));

              if (newVal.length <= 10) {
                let proc = newVal.replace(/ /gm, '');
                let num = `${proc.substring(0, 3)} ${proc.substring(
                  3,
                  6
                )} ${proc.substring(6, proc.length)}`;

                num = num.trim();
                onChange(num);
              }
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: true }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Почта'
            placeholder='Ваша почта'
            required
            value={value}
            type='email'
            error={!!error}
            helperText={
              error?.message || 'На случай если я не смогу до вас дозвониться'
            }
            InputProps={{
              startAdornment: (
                <Email
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='type'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            loading={isLoading}
            options={data ? data.types : []}
            renderInput={(props) => (
              <TextField
                {...props}
                variant='standard'
                label='Где'
                placeholder='Выберите место проведения съёмки'
                required
                InputProps={{
                  ...props.InputProps,
                  startAdornment: (
                    <Place
                      sx={{ mr: 1 }}
                      color='action'
                    />
                  ),
                }}
              />
            )}
            getOptionLabel={(op) => op.title}
            getOptionKey={(op) => op.id}
            value={value}
            onChange={(_, val) => onChange(val)}
          />
        )}
      />
      <Controller
        control={control}
        name='category'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            loading={isLoading}
            options={data ? data.categories : []}
            renderInput={(props) => (
              <TextField
                {...props}
                variant='standard'
                label='Тип съёмки'
                placeholder='Выберите тип съёмки'
                required
                InputProps={{
                  ...props.InputProps,
                  startAdornment: (
                    <TypeSpecimen
                      sx={{ mr: 1 }}
                      color='action'
                    />
                  ),
                }}
              />
            )}
            getOptionLabel={(op) => op.title}
            getOptionKey={(op) => op.id}
            value={value}
            onChange={(_, val) => onChange(val)}
          />
        )}
      />
      <Grid
        container
        gap={2}
        alignItems={'center'}
      >
        <Controller
          control={control}
          name='dateStart'
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <DateTimePicker
              value={value}
              onChange={onChange}
              label='Дата и время начала'
              sx={{ flex: 0.5 }}
              slotProps={{
                textField: { variant: 'standard', required: true },
              }}
            />
          )}
        />
        <Typography fontWeight={'bold'}>__</Typography>
        <Controller
          control={control}
          name='dateEnd'
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <DateTimePicker
              value={value}
              onChange={onChange}
              label='Дата и время завершения'
              sx={{ flex: 0.5 }}
              slotProps={{
                textField: { variant: 'standard', required: true },
              }}
            />
          )}
        />
      </Grid>
      <Controller
        control={control}
        name='description'
        render={({ field: { value, onChange } }) => (
          <TextField
            label='Пожелания'
            placeholder='Введите свои пожелания'
            value={value}
            multiline
            minRows={4}
            maxRows={4}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />

      {renderActions()}
    </Grid>
  );
};
