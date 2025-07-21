'use client';

import { cloneElement, useEffect, useState } from 'react';
import {
  DynamicImporter,
  ModalRegistry,
  OpenModalPayloadWithId,
  OverlayOptions,
} from './modal.types';
import { useModalContext } from './modal.hooks';

interface ModalOverlayProps extends OverlayOptions {
  closeSelf: () => void;
  children: React.ReactElement<any>;
}

export const ModalOverlay = ({
  className = '',
  closeDelay = 0,
  closeOnOverlayClick = true,
  dim = true,
  preventScroll = true,
  children,
  closeSelf,
}: ModalOverlayProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => setVisible(true));
  }, []);

  const delayedClose = () => {
    setVisible(false);
    setTimeout(closeSelf, closeDelay);
  };

  const onClick = (e: React.MouseEvent) => {
    if (!closeOnOverlayClick) return;
    if (e.target === e.currentTarget) {
      delayedClose();
    }
  };

  useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'initial';
      };
    }
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full
        flex items-center justify-center
        z-[999]
        ${dim ? '' : ''}
        `}
    >
      {cloneElement(children, { close: delayedClose, visible })}
    </div>
  );
};

type OpenedModalProps<R extends ModalRegistry> = OpenModalPayloadWithId<R, keyof R> & {
  importer: DynamicImporter;
};

export const OpenModal = <R extends ModalRegistry>({
  importer,
  type,
  id,
  props,
  overlayOptions,
  events,
}: OpenedModalProps<R>) => {
  const { closeModal } = useModalContext();
  const [Component, setComponent] = useState<React.ComponentType>();

  useEffect(() => {
    importer().then((modal) => {
      setComponent(() => modal.default);
    });
  }, [type]);

  const closeModalBySelf = () => {
    events?.onClose?.();
    closeModal({ id });
  };

  if (!Component) return null;
  return (
    <ModalOverlay {...overlayOptions} closeSelf={closeModalBySelf}>
      <Component {...props} />
    </ModalOverlay>
  );
};

interface ModalContainerProps<R extends ModalRegistry> {
  registry: R;
  openModals: OpenModalPayloadWithId<R, keyof R>[];
}

export const ModalContainer = <R extends ModalRegistry>({
  registry,
  openModals,
}: ModalContainerProps<R>) => {
  return (
    <div id="modal-root">
      {openModals.map((modalState) => {
        const props: OpenedModalProps<typeof registry> = {
          importer: registry[modalState.type],
          ...modalState,
        };
        return <OpenModal key={modalState.id} {...props} />;
      })}
    </div>
  );
};
