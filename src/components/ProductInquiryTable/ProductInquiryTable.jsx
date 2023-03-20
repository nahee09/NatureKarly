import {} from 'prop-types';

import {
  TableNoticeHeader,
  InquiryContent,
  NormalNoticeContent,
  InquiryTitle,
} from '..';

import classes from './ProductInquiryTable.module.css';

export function ProductInquiryTable() {
  return (
    <>
      <thead>
        <tr className={classes.title}>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>답변상태</th>
        </tr>
      </thead>
      <tbody>
        <TableNoticeHeader
          additional={true}
          noticeTitle={'판매(일시)중단 제품 안내 (23.03.15 업데이트)'}
        />
        <NormalNoticeContent />
        <InquiryTitle />
        <InquiryContent />
        <TableNoticeHeader
          additional={true}
          isNoticeTag={false}
          isSecret={true}
        />
      </tbody>
    </>
  );
}
