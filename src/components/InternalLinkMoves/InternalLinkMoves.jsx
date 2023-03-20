import { A11yHidden, InternalLinkMove } from '..';

import classes from './InternalLinkMoves.module.css';

export function InternalLinkMoves({ ...restProps }) {
  return (
    <>
      <A11yHidden>
        <h3>상세 메뉴 리스트</h3>
      </A11yHidden>
      <ul className={classes.detailMenuList} {...restProps}>
        <InternalLinkMove name="상품설명" to="#productDescription" />
        <InternalLinkMove name="상세정보" to="#productDetail" />
        <InternalLinkMove
          isNumberOption={true}
          name="후기"
          to="#productReview"
        />
        <InternalLinkMove name="문의" to="#productInquiry" />
      </ul>
    </>
  );
}
