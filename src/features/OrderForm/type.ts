import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';

export interface OrderFormFields {
  phone: string;
  email: string;
  name: string;
  description: string;
  category: { title: string; id: number };
  type: { title: string; id: number };
  dateStart: Dayjs;
  dateEnd: Dayjs;
}
export interface OrderFormProps {
  onSubmit: (form: OrderFormFields) => void;
  renderActions: () => ReactNode;
}

export interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
