import { useRef, useLayoutEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import classes from './Product.module.css';

import { A11yHidden, IconComponent } from '@/components';
import { useReadData } from '@/firebase/firestore';

export function Product({ isSwiper }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const datadata = { width: '45px', height: '45px' };

  const { readData, data, isLoading, error } = useReadData('products');

  // useLayoutEffect(() => {
  //   const db = getFirestore(firebaseApp);
  //   const productsRef = collection(db, 'products');

  //   getDocs(productsRef).then((res) => {
  //     const data = [];
  //     res.forEach(async (data) => {
  //       data.push(data.data());
  //     });
  //     setdata(data);
  //   });
  // }, []);

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
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className={classes.productImg}>
                  <img alt={item.image.alt} src={item.image.thumbnail} />
                  <IconComponent
                    className={classes.cart}
                    data-image="cart"
                    datadata={datadata}
                    role="button"
                  />
                </div>
                <ul className={classes.productInfo}>
                  <li className={classes.name}>{item.name}</li>
                  {item.salePrice ?
                    <li className={classes.discount}>
                      <p className={classes.discountRate}>
                        <A11yHidden>할인율</A11yHidden> {`${item.discount * 100}%`}
                      </p>
                      <p className={classes.salePrice}>
                        <A11yHidden>할인가</A11yHidden> {`${item.salePrice.toLocaleString('ko-KR')}원`}
                      </p>
                      <p className={classes.price}>
                        <A11yHidden>정상가</A11yHidden> {`${item.price.toLocaleString('ko-KR')}원`}
                      </p>
                    </li>
                    :
                    <li className={classes.discount}>
                      <p className={classes.salePrice}>{item.price}</p>
                    </li>
                  }
                </ul>
              </SwiperSlide>
            );
          })}
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
    <ul className={classes.productList}>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <div className={classes.productImg}>
              <img alt={item.image.alt} src={item.image.thumbnail} />
              <IconComponent
                className={classes.cart}
                data-image="cart"
                datadata={datadata}
                role="button"
              />
            </div>
            <ul className={classes.productInfo}>
              <li>샛별배송</li>
              <li className={classes.name}>{item.name}</li>
              {item.salePrice ?
                <li className={classes.discount}>
                  <p className={classes.discountRate}>
                    <A11yHidden>할인율</A11yHidden> {`${item.discount * 100}%`}
                  </p>
                  <p className={classes.salePrice}>
                    <A11yHidden>할인가</A11yHidden> {`${item.salePrice.toLocaleString('ko-KR')}원`}
                  </p>
                  <p className={classes.price}>
                    <A11yHidden>정상가</A11yHidden> {`${item.price.toLocaleString('ko-KR')}원`}
                  </p>
                </li>
                :
                <li className={classes.discount}>
                  <p className={classes.salePrice}>{item.price}</p>
                </li>
              }
              <li className={classes.description}>{item.description}</li>
              <li className={classes.icon}>
                <span className={classes.karly}>
                  {item.badge.karly ? 'Karly Only' : ''}
                </span>
                <span className={classes.limit}>
                  {item.badge.limit ? '한정수량' : ''}
                </span>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

/* data -------------------------------------------------------------------- */

Product.defaultdata = {
  isSwiper: false,
  isSale: false,
};

Product.propTypes = {
  isSwiper: PropTypes.bool,
  isSale: PropTypes.bool,
};
