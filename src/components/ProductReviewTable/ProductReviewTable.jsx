import {} from 'prop-types';
import { ReviewTableContent, TableNoticeHeader, NormalNoticeContent } from '..';

export function ProductReviewTable() {
  return (
    <>
      <tbody>
        <TableNoticeHeader noticeTitle={'금주의 베스트 후기 안내'} />
        <NormalNoticeContent />
        <TableNoticeHeader noticeTitle={'상품 후기 적립금 정책 안내'} />
        <ReviewTableContent />
      </tbody>
    </>
  );
}
