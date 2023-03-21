import { A11yHidden } from '../';

import classes from './AddCart.module.css';

const AddCart = function ({ name, price, totalprice }) {
  return (
    <div className={classes.AddCart}>
      <h3>{name}</h3>
      <div className={classes.Price}>
        <p>{price}원</p>
        <A11yHidden>
          <label htmlFor="a">수량카운터</label>
        </A11yHidden>
        <input id="a" name="" type="number" />
      </div>
      <div className={classes.TotalPriceTable}>
        <p>합계</p>
        <p className={classes.TotalPrice}>{totalprice}원</p>
      </div>
      <p className={classes.PointGuide}>구매 시 5원 적립</p>
      <div className={classes.AddCartButton}>
        <button>취소</button>
        <button>장바구니 담기</button>
      </div>
    </div>
  );
};

export default AddCart;
