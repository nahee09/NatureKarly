import {
  CartTableCheckbox,
  CartTableListItem,
} from './CartTableComponent/CartTableComponent';
import { A11yHidden } from '../../A11yHidden/A11yHidden';

import classes from './CartTable.module.css';

const CartTable = function () {
  return (
    <div className={classes.CartTable}>
      <A11yHidden>
        <h3>장바구니 리스트</h3>
      </A11yHidden>
      <CartTableCheckbox />
      <ul>
        <CartTableListItem>냉장 식품</CartTableListItem>
        <CartTableListItem>냉동 식품</CartTableListItem>
        <CartTableListItem>상온 식품</CartTableListItem>
      </ul>
      <CartTableCheckbox />
    </div>
  );
};

export default CartTable;
