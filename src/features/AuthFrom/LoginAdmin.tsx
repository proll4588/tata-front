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
import { RegFromFields } from './type';

interface LoginAdminDialogProps {
  isOpen: boolean;
  onClose?: () => void;
  submit: (form: RegFromFields) => void;
  error?: string;
  isLoading?: boolean;
}
export const LoginAdminDialog: FC<LoginAdminDialogProps> = ({
  isOpen,
  onClose,
  submit,
  error,
  isLoading = false,
}) => {
  // const [login, { isLoading, error }] = useLoginAdminMutation();

  // const submit = (form: RegFromFields) => {
  //   login({ email: form.email, password: form.password }).then((ans) => {
  //     if ('error' in ans) {
  //       return;
  //     }

  //     if ('data' in ans) {
  //       token.save(ans.data.token);
  //       onClose?.();
  //     }
  //   });
  // };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Вход</DialogTitle>

      <DialogContent sx={{ width: 550 }}>
        {error && <DialogContentText color={'red'}>*{error}</DialogContentText>}
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
                Войти
              </Button>
            </DialogActions>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};
