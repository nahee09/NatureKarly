import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

import { A11yHidden } from '../A11yHidden/A11yHidden';

import classes from './Product.module.css';

function ProductDiscount(isSale) {
  if (!isSale) {
    return (
      <li className={classes.discount}>
        <p className={classes.salePrice}>4,980원</p>
      </li>
    );
  }

  return (
    <li className={classes.discount}>
      <p className={classes.discountRate}>
        <A11yHidden>할인율</A11yHidden>24%
      </p>
      <p className={classes.salePrice}>
        <A11yHidden>할인가</A11yHidden>4,980원
      </p>
      <p className={classes.price}>
        <A11yHidden>정상가</A11yHidden>24,900원
      </p>
    </li>
  );
}

export function Product({ isSwiper, isSale }) {
  if (isSwiper) {
    return (
      <SwiperSlide>
        <div className={classes.productImg}>
          <img alt="" src="" />
          {/* 장바구니 아이콘 */}
        </div>
        <ul className={classes.productInfo}>
          <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
          {ProductDiscount(isSale)}
        </ul>
      </SwiperSlide>
    );
  }

  return (
    <>
      <div className={classes.productImg}>
        <img alt="" src="" />
        {/* 장바구니 아이콘 */}
      </div>
      <ul className={classes.productInfo}>
        <li className={classes.delivery}>샛별배송</li>
        <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
        {ProductDiscount(isSale)}
        <li className={classes.summary}>CJ즉석밥 고소한 맛의 발아 현미밥</li>
      </ul>
    </>
  );
}

/* Props -------------------------------------------------------------------- */

Product.defaultProps = {
  isSwiper: false,
  isSale: false,
};

Product.propTypes = {
  isSwiper: PropTypes.bool,
  isSale: PropTypes.bool,
};
