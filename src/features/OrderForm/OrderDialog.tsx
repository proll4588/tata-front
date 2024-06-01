/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { OrderForm } from './OrderForm';
import { OrderDialogProps, OrderFormFields } from './type';
import {
  CreateRequestRequest,
  useCreateRequestMutation,
} from '../../shared/api/requestApi';
import { token } from '../../shared/utils/token';

const prepareReqFromToQ = (
  form: OrderFormFields
): CreateRequestRequest['data'] => {
  return {
    description: form.description,
    email: form.email,
    // TODO: Разобраться с датами
    endDate: form.dateEnd.format('YYYY-MM-DDTHH:mm:ssZ'),
    startDate: form.dateStart.format('YYYY-MM-DDTHH:mm:ssZ'),
    phone_number: form.phone.replace(/\s+/g, ''),
    photo_category_id: form.category.id,
    photo_type_id: form.type.id,
    user_name: form.name,
  };
};

export const OrderDialog: FC<OrderDialogProps> = ({ isOpen, onClose }) => {
  const [createRequest, { isLoading, error }] = useCreateRequestMutation();

  const submit = (form: OrderFormFields) => {
    const myToken = token.get()?.token;

    createRequest({
      data: prepareReqFromToQ(form),
      token: myToken,
    }).then((ans) => {
      if ('error' in ans) {
        return;
      }

      if ('data' in ans) {
        onClose?.();
      }
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Заказать услугу</DialogTitle>

      <DialogContent sx={{ width: 550 }}>
        {error && 'data' in error && (
          <DialogContentText color={'red'}>
            {/* @ts-ignore */}
            {''}*{error.data!.error}
          </DialogContentText>
        )}
        <DialogContentText>
          * Заполните данную форму чтобы я могла с вами связаться.
        </DialogContentText>
        <OrderForm
          onSubmit={submit}
          renderActions={() => (
            <DialogActions>
              <Button
                onClick={onClose}
                color='error'
                variant='outlined'
                disabled={isLoading}
              >
                Закрыть
              </Button>
              <Button
                type='submit'
                variant='contained'
                disabled={isLoading}
              >
                Отправить
              </Button>
            </DialogActions>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};
