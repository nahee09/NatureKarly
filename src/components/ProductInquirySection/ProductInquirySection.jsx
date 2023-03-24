import {} from 'prop-types';

import {
  ReviewDescription,
  ProductTable,
  PageMoveButtons,
  ProductInquiryTable,
} from '..';

export function ProductInquirySection() {
  const description = [
    '상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.',
    '배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.',
  ];

  return (
    <>
      <ReviewDescription
        buttonName="문의하기"
        description={description}
        title="상품문의"
      />
      <ProductTable
        captionName="상품문의 테이블"
        id="productInquirySummary"
        tableContent={<ProductInquiryTable />}
        summary=" 상품 문의를 확인할 수 있는 표입니다. 각 행을 클릭하면 상세 내용을 확인할
        수 있습니다."
      />
      <PageMoveButtons />
    </>
  );
}
