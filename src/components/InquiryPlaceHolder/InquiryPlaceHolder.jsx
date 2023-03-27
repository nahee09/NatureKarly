import classes from './InquiryPlaceHolder.module.css';

export function InquiryPlaceHolder() {
  return (
    <div className={classes.text}>
      <div className={classes.title}>상품문의 작성 전 확인해 주세요</div>
      <ul>
        <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
        <li>
          해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수
          있습니다.
        </li>
        <li>
          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이칼리 내 1:1
          문의에 남겨주세요.
        </li>
      </ul>

      <div className={classes.title}>제품</div>
      <ul>
        <li>
          입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어 있습니다.
          (종 모양을 클릭하여, 재입고 알림 설정 가능)
        </li>
        <li>
          제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등 제품
          정보는 상세이미지 또는 상세정보에서 확인 가능합니다.
        </li>
      </ul>
    </div>
  );
}
