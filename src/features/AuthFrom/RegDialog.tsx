import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';
import { RegFrom } from './RegFrom';
import { useRegisterMutation } from '../../shared/api/authApi';
import { RegFromFields } from './type';
import { useAuth } from '../../shared/context/AuthContext/AuthContext';

interface RegDialogProps {
  isOpen: boolean;
  onClose?: () => void;
}
export const RegDialog: FC<RegDialogProps> = ({ isOpen, onClose }) => {
  const [reg, { isLoading, error }] = useRegisterMutation();
  const { auth } = useAuth();

  const submit = (form: RegFromFields) => {
    reg({ email: form.email, password: form.password }).then((ans) => {
      if ('error' in ans) {
        return;
      }

      if ('data' in ans) {
        auth(ans.data.token);
        onClose?.();
      }
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Регистрация</DialogTitle>

      <DialogContent sx={{ width: 550 }}>
        {error && 'data' in error && (
          <DialogContentText color={'red'}>
            {/* @ts-ignore */}
            {''}*{error.data!.error}
          </DialogContentText>
        )}
        <RegFrom
          isError={!!error}
          onSubmit={submit}
          renderActions={() => (
            <DialogActions>
              <Button
                onClick={onClose}
                disabled={isLoading}
                variant='outlined'
                color='error'
              >
                Закрыть
              </Button>
              <Button
                type='submit'
                disabled={isLoading}
                variant='contained'
              >
                Зарегистрироваться
              </Button>
            </DialogActions>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};
