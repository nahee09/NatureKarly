import ListArrow from '../../../../assets/icons/Icon/common/Direction=Down.svg';

import classes from './CartTableComponent.module.css';
import { Input } from '@/components/Input/Input';

export const CartTableCheckbox = function () {
  return (
    <div className={classes.CartTableCheckbox}>
      <Input id={'a'} type={'checkbox'} />
      <label htmlFor={'a'}>전체선택(3/3)</label>
      <button>선택삭제</button>
    </div>
  );
};

export const CartTableListItem = function ({ children }) {
  return (
    <li className={classes.CartTableListItem}>
      {children}
      <img alt="" className={classes.ListArrow} src={ListArrow} />
    </li>
  );
};
