/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useLoginAdminMutation } from '../../shared/api/authApi';
import { FC, useMemo, useState } from 'react';
import { LoginAdminDialog } from '../../features/AuthFrom/LoginAdmin';
import {
  useAddUrlMutation,
  useGetAllUsersRequestsQuery,
  useSetPriceMutation,
  useSetStatusMutation,
} from '../../shared/api/requestApi';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { RequestCard } from '../../features/RequestCard/RequestCard';
import { useViewModelWithInitValue } from '../../shared/hooks/useViewModelWithInitValue';

const useAdmin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<null | string>(null);
  const [loginByAdmin, { isLoading, error }] = useLoginAdminMutation();

  const handleAuth = (email: string, password: string) => {
    loginByAdmin({ email, password }).then(({ error, data }) => {
      if (error) return;

      if (data) {
        setIsAuth(true);
        setToken(data.token);
      }
    });
  };

  const er = useMemo(() => {
    // @ts-ignore
    if (error && 'data' in error) return error.data!.error;
  }, [error]);

  return { isAuth, handleAuth, isLoading, error: er, token };
};

const statusList = [
  {
    title: 'Новая',
    id: 1,
  },
  {
    title: 'В работе',
    id: 2,
  },
  {
    title: 'Завершён',
    id: 3,
  },
  {
    title: 'Отменён',
    id: 4,
  },
];
const useEditRequest = () => {
  const [addUrl, { isLoading: isAddUrl }] = useAddUrlMutation();
  const [setPrice, { isLoading: isSetPrice }] = useSetPriceMutation();
  const [setStatus, { isLoading: isSetStatus }] = useSetStatusMutation();

  const isLoading = useMemo(() => {
    return isAddUrl || isSetPrice || isSetStatus;
  }, [isAddUrl, isSetPrice, isSetStatus]);

  return { addUrl, setPrice, setStatus, isLoading };
};

export const AdminPage = () => {
  const { handleAuth, isAuth, isLoading, error, token } = useAdmin();

  if (!isAuth)
    return (
      <LoginAdminDialog
        isOpen
        isLoading={isLoading}
        error={error}
        submit={(form) => {
          handleAuth(form.email, form.password);
        }}
      />
    );

  if (token) return <AllUsersRequestList token={token} />;

  return <Typography>Что-то пошло не так</Typography>;
};

interface AllUsersRequestListProps {
  token: string;
}
export const AllUsersRequestList: FC<AllUsersRequestListProps> = ({
  token,
}) => {
  const { close, initValue, isOpen, open } =
    useViewModelWithInitValue<number>();

  const {
    close: close1,
    initValue: initValue1,
    isOpen: isOpen1,
    open: open1,
  } = useViewModelWithInitValue<number>();
  const {
    close: close2,
    initValue: initValue2,
    isOpen: isOpen2,
    open: open2,
  } = useViewModelWithInitValue<number>();
  const { data, isLoading } = useGetAllUsersRequestsQuery({ token });
  //   const [cancel] = useCancelUserRequestMutation();

  if (isLoading) return <CircularProgress />;

  return (
    <AppContainer sx={{ mt: 2, pb: 2 }}>
      {initValue && (
        <ChangeStatusDialog
          isOpen={isOpen}
          onClose={close}
          requestId={initValue}
        />
      )}

      {initValue1 && (
        <ChangePriceDialog
          isOpen={isOpen1}
          requestId={initValue1}
          onClose={close1}
        />
      )}

      {initValue2 && (
        <ChangeUrlDialog
          isOpen={isOpen2}
          requestId={initValue2}
          onClose={close2}
        />
      )}

      <Typography
        textAlign={'center'}
        fontWeight={700}
        fontSize={24}
        mb={2}
      >
        Список заказов
      </Typography>
      <Grid
        container
        alignItems={'center'}
        flexDirection={'column'}
        gap={2}
      >
        {data?.requests.map((item) => (
          <RequestCard
            request={item}
            actions={[
              {
                title: 'Изменить статус',
                action: () => {
                  open(item.id);
                },
              },
              {
                title: 'Изменить цену',
                action: () => {
                  open1(item.id);
                },
              },
              {
                title: 'Изменить ссылку',
                action: () => {
                  open2(item.id);
                },
              },
            ]}
          />
        ))}
      </Grid>
    </AppContainer>
  );
};

interface ChangeStatusDialogProps {
  isOpen: boolean;
  requestId: number;
  onClose?: () => void;
}
const ChangeStatusDialog: FC<ChangeStatusDialogProps> = ({
  isOpen,
  onClose,
  requestId,
}) => {
  const { isLoading, setStatus } = useEditRequest();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Изменение статуса</DialogTitle>

      <DialogContent>
        <Grid
          container
          gap={1}
          flexDirection={'column'}
        >
          {statusList.map((el) => (
            <Chip
              disabled={isLoading}
              label={el.title}
              onClick={() => {
                setStatus({ requestId, statusId: el.id }).then(() => {
                  onClose?.();
                });
              }}
            />
          ))}
        </Grid>

        {isLoading && <CircularProgress />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};

interface ChangePriceDialogProps {
  isOpen: boolean;
  requestId: number;
  onClose?: () => void;
}
const ChangePriceDialog: FC<ChangePriceDialogProps> = ({
  isOpen,
  requestId,
  onClose,
}) => {
  const [price, setPrice] = useState(0);
  const { isLoading, setPrice: setReqPrice } = useEditRequest();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Изменение статуса</DialogTitle>

      <DialogContent>
        <TextField
          sx={{ mt: 1 }}
          label='Цена'
          type='number'
          variant='outlined'
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
        />

        {isLoading && <CircularProgress />}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setReqPrice({
              requestId,
              price,
            }).then(() => {
              onClose?.();
            });
          }}
        >
          Сохранить
        </Button>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};

interface ChangeUrlDialogProps {
  isOpen: boolean;
  requestId: number;
  onClose?: () => void;
}

export const ChangeUrlDialog: FC<ChangeUrlDialogProps> = ({
  isOpen,
  requestId,
  onClose,
}) => {
  const [url, setUrl] = useState('');
  const { isLoading, addUrl } = useEditRequest();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Изменение статуса</DialogTitle>

      <DialogContent>
        <TextField
          sx={{ mt: 1 }}
          label='Ссылка'
          type='url'
          variant='outlined'
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        {isLoading && <CircularProgress />}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            addUrl({
              requestId,
              url,
            }).then(() => {
              onClose?.();
            });
          }}
        >
          Сохранить
        </Button>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};
