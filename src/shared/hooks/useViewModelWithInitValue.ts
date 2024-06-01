import { useState, useCallback } from 'react';

export interface UseViewModalWithInitFieldsReturnValue<T> {
  isOpen: boolean;
  close: () => void;
  open: (initValue?: T) => void;
  initValue: T | undefined;
}

export const useViewModelWithInitValue = <
  T
>(): UseViewModalWithInitFieldsReturnValue<T> => {
  const [isOpen, setIsOpen] = useState(false);
  const [initValue, setInitValue] = useState<T | undefined>(undefined);

  const open = useCallback((initValue?: T) => {
    setInitValue(initValue);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // setInitValue(undefined);
    setIsOpen(false);
  }, []);

  return { isOpen, open, close, initValue };
};
