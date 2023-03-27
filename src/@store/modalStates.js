import { atom } from 'recoil';

export const modalStates = atom({
  key: 'modalStates',
  default: {},
});

export const showModalState = atom({
  key: 'showModalState',
  default: false,
});
