import {} from 'prop-types';

import { InternalLinkMoves } from '..';

import classes from './InternalLinkMoveTest.module.css';
import saladInfoImage from '@/assets/salad/detail_info.jpg';
import saladViewImage from '@/assets/salad/detail_view.jpg';

export function InternalLinkMoveTest() {
  const internalLinkList = [
    { id: 'item1', name: '상품설명', to: '#productDescription' },
    { id: 'item2', name: '상세정보', to: '#productDetail' },
    { id: 'item3', name: '후기', to: '#productReview', isNumberOption: true },
    { id: 'item4', name: '문의', to: '#productInquiry' },
  ];

  return (
    <section className={classes.align}>
      <InternalLinkMoves list={internalLinkList} title="상세 메뉴 리스트" />
      <img alt="상품설명이미지" id="productDescription" src={saladViewImage} />
      <img alt="상품상세정보이미지" id="productDetail" src={saladInfoImage} />
    </section>
  );
}
