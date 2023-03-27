import CartTable from './CartTable/CartTable';

import OrdererTable from './OrdererTable/OrdererTable';

import classes from './Cart.module.css';

const Cart = function () {
  return (
    <section className={classes.Cart}>
      <h2>장바구니</h2>
      <div className={classes.CartLayout}>
        <CartTable />
        <OrdererTable
          deliveryprice={'3,000'}
          price={'40,680'}
          saleprice={'3,000'}
          totalprice={'40,680'}
        />
      </div>
    </section>
  );
};

export default Cart;
