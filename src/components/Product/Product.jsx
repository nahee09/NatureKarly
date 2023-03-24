import { useRef } from 'react';

import PropTypes from 'prop-types';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import classes from './Product.module.css';
import thumb from '@/assets/jukkumi/thumbnail.jpg';
import { A11yHidden, IconComponent } from '@/components';

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dataProps = { width: '45px', height: '45px' };
  if (isSwiper) {
    return (
      <div className="productSwiper">
        <Swiper
          modules={[Navigation]}
          slidesPerGroup={4}
          slidesPerView={4}
          spaceBetween={18}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.productImg}>
              <img alt="쭈꾸미" src={thumb} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                dataProps={dataProps}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li className={classes.name}>[풀무원]탱탱쫄면 (4개입)</li>
              {ProductDiscount(isSale)}
            </ul>
          </SwiperSlide>
        </Swiper>
        <button
          ref={prevRef}
          className="swiper-button-prev"
          type="button"
        ></button>
        <button
          ref={nextRef}
          className="swiper-button-next"
          type="button"
        ></button>
      </div>
    );
  }

  return (
    <>
      <div className={classes.productImg}>
        <img alt="쭈꾸미" src={thumb} />
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
