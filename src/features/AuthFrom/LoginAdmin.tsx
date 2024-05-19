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
import { useLoginAdminMutation } from '../../shared/api/authApi';
import { RegFromFields } from './type';
import { token } from '../../shared/utils/token';

interface LoginAdminDialogProps {
  isOpen: boolean;
  onClose?: () => void;
}
export const LoginAdminDialog: FC<LoginAdminDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const [login, { isLoading, error }] = useLoginAdminMutation();

  const submit = (form: RegFromFields) => {
    login({ email: form.email, password: form.password }).then((ans) => {
      if ('error' in ans) {
        return;
      }

      if ('data' in ans) {
        token.save(ans.data.token);
        onClose?.();
      }
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Вход</DialogTitle>

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
