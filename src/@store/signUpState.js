import { atom, selector } from 'recoil';

export const idState = atom({ key: 'idState', default: '' });
export const pwState = atom({ key: 'pwState', default: '' });
export const repwState = atom({ key: 'repwState', default: '' });
export const nameState = atom({ key: 'nameState', default: '' });
export const emailState = atom({ key: 'emailState', default: '' });
export const phoneState = atom({ key: 'phoneState', default: '' });
export const addressState = atom({ key: 'addressState', default: '' });
export const genderState = atom({ key: 'genderState', default: 2 });
export const birthState = atom({ key: 'birthState', default: '' });
export const additionalState = atom({ key: 'additionalState', default: 0 });
export const etcState = atom({ key: 'etcState', default: 0 });

export const etcAllAgree = selector({
  key: 'etcAllAgree',
  get: ({ get }) => {
    return get(etcState) === 15;
  },
});
