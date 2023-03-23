import { A11yHidden } from '../../A11yHidden/A11yHidden';

import classes from './OrdererTable.module.css';
import { Button } from '@/components/Button/Button';

const OrdererTable = function ({
  price,
  saleprice,
  deliveryprice,
  totalprice,
}) {
  return (
    <aside className={classes.OrdererTable}>
      <A11yHidden>
        <h3>주문자 정보</h3>
      </A11yHidden>
      <div className={classes.BoxDesign}>
        <h4>배송지</h4>
        <p className={classes.Address}>
          서울 중랑구 면목로 42길 11 &#40;행운빌딩&#41; 603호
        </p>
        <p className={classes.DeliveryType}>샛별배송</p>
        <Button
          style={{
            marginTop: '12px',
            width: '100%',
            justifyContent: 'center',
            background: 'none',
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            padding: '10px 0',
            lineHeight: 'var(--line-height-md)',
          }}
        >
          배송지변경
        </Button>
      </div>
      <div className={[classes.BoxDesign, classes.PriceTable].join(' ')}>
        <A11yHidden>
          <h4>상품 금액 안내</h4>
        </A11yHidden>
        <ul>
          <li>
            상품금액
            <p>
              {price}
              <span>원</span>
            </p>
          </li>
          <li>
            상품할인금액
            <p>
              -{saleprice}
              <span>원</span>
            </p>
          </li>
          <li>
            배송비
            <p>
              +{deliveryprice}
              <span>원</span>
            </p>
          </li>
        </ul>
        <p className={classes.TotalPrice}>
          결제예정금액<span>{totalprice}</span>
          <span>원</span>
        </p>
        <p className={classes.PointGuide}>최대 36원 적립 일반 0.1%</p>
      </div>
      <Button
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '10px 0',
          lineHeight: '150%',
        }}
      >
        주문하기
      </Button>
      <article className={classes.OrderInformaiton}>
        <p>쿠폰/적립금은 주문서에서 사용 가능합니다</p>
        <p>&#91;주문완료&#93; 상태일 경우에만 주문 취소 가능합니다</p>
        <p>
          &#91;마이칼리 &#62; 주문내역 상세페이지&#93; 에서 직접 취소하실 수
          있습니다.
        </p>
        <p>
          쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.
        </p>
        <p>
          상품별로 적립금 지급 기준이 다를 수 있습니다.&#40;상품 상세 페이지에서
          확인 가능합니다.&#41;
        </p>
      </article>
    </aside>
  );
};

export default OrdererTable;
