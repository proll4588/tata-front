import { Box, Chip, Dialog, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import image from './tata.jpg';
import { AccountCircle, Email, Phone, Telegram } from '@mui/icons-material';

const copy = (str: string) => {
  navigator.clipboard
    .writeText(str)
    .then(() => {
      // Получилось!
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
};

interface ContactDialogProps {
  isOpen: boolean;
  onClose?: () => void;
}
export const ContactDialog: FC<ContactDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          minWidth: 800,
        },
      }}
    >
      <Box sx={{ display: 'flex', width: 800 }}>
        <img
          src={image}
          style={{ width: '50%' }}
        />
        <Grid
          container
          flexDirection={'column'}
          justifyContent={'space-between'}
          p={2}
        >
          <Typography
            fontSize={20}
            textAlign={'justify'}
          >
            <b>Привет!</b> Меня зовут <b>Таня</b> - фотограф из Красноярска
            (Россия).
            <br />
            <br />
            Фотографией занимаюсь с <b>2018</b> года. Я многопрофильный
            фотограф, могу снять очень красивый репортаж, нежную свадьбу,
            индивидуальные портреты и ещё много чего. К каждому заказу подхожу
            индивидуально!
          </Typography>

          <Grid
            container
            flexDirection={'column'}
            // alignItems={'flex-start'}
            gap={1}
          >
            <Chip
              icon={<Phone />}
              label={'+7 (923) 350 8200'}
              variant='outlined'
              onClick={() => copy('+7 (923) 350 8200')}
            />
            <Chip
              icon={<Email />}
              label={'tanyamasnikova@gmail.com'}
              variant='outlined'
              color='error'
              onClick={() => copy('tanyamasnikova@gmail.com')}
            />
            <Chip
              icon={<AccountCircle />}
              label={'vk.com/tattaaa'}
              variant='outlined'
              color='primary'
              onClick={() => copy('vk.com/tattaaa')}
            />
            <Chip
              icon={<Telegram />}
              label={'t.me/ttaattaaa'}
              variant='outlined'
              color='info'
              onClick={() => copy('t.me/ttaattaaa')}
            />
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
