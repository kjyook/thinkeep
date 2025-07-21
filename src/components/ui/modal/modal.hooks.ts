'use client';

import { useContext } from 'react';
import { ModalRegistry } from './modal.types';
import { ModalContext, ModalContextType } from './modal.context';

export const useModalContext = <R extends ModalRegistry>() => {
  const context = useContext(ModalContext as React.Context<ModalContextType<R>>);
  return context;
};
