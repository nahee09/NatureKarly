import { createContext } from 'react';
import { createPortal } from 'react-dom';

import { useRecoilState } from 'recoil';

import classes from './ModalWindow.module.css';
import { modalStates, showModalState } from '@/@store/modalStates';

export const modalCloseContext = createContext();
const modalWindowContainer = document.getElementById('modalWindowContainer');

export function ModalWindow({ modalId, children, ...restProps }) {
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [modalState, setModalState] = useRecoilState(modalStates);

  function handleClose() {
    setShowModal(false);
    setModalState({ ...modalState, [modalId]: false });
  }

  if (showModal === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      {showModal &&
        modalState[modalId] &&
        createPortal(
          <modalCloseContext.Provider value={handleClose}>
            <div className={classes.modalBackground} {...restProps}>
              {children}
            </div>
          </modalCloseContext.Provider>,
          modalWindowContainer
        )}
    </>
  );
}
