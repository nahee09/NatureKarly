import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MainPage.swiper.css';
import classes from './MainPage.module.css';
import slideImg1 from '@/assets/banner/banner01.png';
import slideImg2 from '@/assets/banner/banner02.png';
import slideImg3 from '@/assets/banner/banner03.png';
import slideImg4 from '@/assets/banner/banner04.png';
import lineBanner from '@/assets/banner/line-banner01.png';

import { Container, Product, Title } from '@/components';

/* -------------------------------------------------------------------------- */

export default function MainPage() {
  return (
    <div className={classes.mainPage}>
      <Swiper
        className="visualSwiper"
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img alt="부드러운 달콤함 칼리 과일 가게" src={slideImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="부드러운 달콤함 칼리 과일 가게" src={slideImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="부드러운 달콤함 칼리 과일 가게" src={slideImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="부드러운 달콤함 칼리 과일 가게" src={slideImg4} />
        </SwiperSlide>
      </Swiper>
      <Container className={classes.container}>
        <Title titleStyle="XL">이 상품 어때요?</Title>
        <Product isSwiper={true} />
      </Container>
      <Container className={classes.container}>
        <img alt="부드러운 달콤함 칼리 과일 가게" src={lineBanner} />
      </Container>
      <Container className={classes.container}>
        <Title titleStyle="XL">놓치면 후회할 가격</Title>
        <Product isSwiper={true} />
      </Container>
    </div>
  );
}
