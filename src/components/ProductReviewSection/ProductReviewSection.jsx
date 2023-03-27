import {} from 'prop-types';

import {
  ReviewDescription,
  ProductTable,
  PageMoveButtons,
  ProductReviewTable,
  ModalWindow,
  ProductReviewPopUp,
} from '..';

import classes from './ProductReviewSection.module.css';

export function ProductReviewSection() {
  const description = [
    '퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립',
    '후기 작성은 배송완료일로부터 30일 이내 가능합니다.',
    '작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)',
  ];

  return (
    <>
      <ReviewDescription
        buttonName="후기 작성하기"
        description={description}
        subTitle="글후기 50원 적립금 혜택이 있어요."
        title="상품후기"
      />

      <div className={classes.tableOption}>
        <span>총 {2}개</span>
        <span>
          <button className={classes.isActive} type="button">
            추천순
          </button>
          <button type="button">최근 등록순</button>
        </span>
      </div>

      <ProductTable
        captionName="상품후기 테이블"
        id="productReviewSummary"
        summary=" 상품 후기를 확인할 수 있는 표입니다. 공지는 클릭하면 상세 내용을 볼 수 있습니다. "
        tableContent={<ProductReviewTable />}
      />

      <PageMoveButtons />
      <ModalWindow modalId="reviewModal">
        <ProductReviewPopUp tabIndex={0} />
      </ModalWindow>
    </>
  );
}

ProductReviewSection.defaultProps = {};

ProductReviewSection.propTypes = {};
