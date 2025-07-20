import { createContext, PropsWithChildren } from 'react';
import {
  CloseModalPayload,
  ModalRegistry,
  OpenModalPayload,
  OpenModalPayloadWithId,
  OverlayOptions,
} from './modal.types';
import { useModalReducer } from './modal.reducer';
import { ModalContainer } from './modal.container';

export type ModalContextType<R extends ModalRegistry> = {
  openModals: OpenModalPayload<R, keyof R>[];
  openModal: <T extends keyof R>(
    payload: OpenModalPayload<R, T>,
  ) => OpenModalPayloadWithId<R, keyof R>;
  closeModal: (payload: CloseModalPayload) => { id: string };
  closeAllModal: () => void;
};

export const createModalContext = <R extends ModalRegistry>() =>
  createContext<ModalContextType<R>>({
    openModals: [],
    openModal: (payload) => ({ ...payload, id: '' }),
    closeModal: (payload: CloseModalPayload) => {
      return { id: '' };
    },
    closeAllModal: () => {
      return;
    },
  });

export const ModalContext = createModalContext();

export type ModalProviderProps<R extends ModalRegistry> = {
  registry: R;
  defaultOverlayOptions?: { default?: Partial<OverlayOptions> } & {
    [key in keyof R]?: Partial<OverlayOptions>;
  };
};

export const ModalProvider = <R extends ModalRegistry>({
  registry,
  defaultOverlayOptions,
  children,
}: PropsWithChildren<ModalProviderProps<R>>) => {
  const { openModals, ...actions } = useModalReducer<R>(defaultOverlayOptions);

  const TypedModalContext = ModalContext as React.Context<ModalContextType<R>>;

  return (
    <TypedModalContext.Provider value={{ openModals, ...actions }}>
      {children}
      <ModalContainer registry={registry} openModals={openModals} />
    </TypedModalContext.Provider>
  );
};
