import { ReactNode } from 'react';

export interface RegFromFields {
  email: string;
  password: string;
}

export interface RegFromProps {
  renderActions: () => ReactNode;
  onSubmit: (form: RegFromFields) => void;
  isError?: boolean;
}
