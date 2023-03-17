import ProductInformation from './ProductInformation/ProductInformation';
import ProductPrice from './ProductPrice/ProductPrice';
import { Button } from '..';

import classes from './ProductDetailTable.module.css';

const ProductDetailTable = function ({ name, description, price }) {
  return (
    <div className={classes.Inner}>
      <section>
        <h2>{name}</h2>
        <img alt="" src="" />
        <p>샛별배송</p>
        <p>{description}</p>
        <p>
          {price}
          <span>원</span>
        </p>
        <p>로그인 후, 적립 혜택이 제공됩니다.</p>
        <ProductInformation
          content={'샛별배송'}
          title={'배송'}
          subcontent={
            '23시 주문 시 내일 아침 7시 전 도착\n(대구 부산 울사 샛별배송 운영시간 별도 확인'
          }
        />
        <ProductInformation content={'칼리'} title={'판매자'} />
        <ProductInformation
          content={'상온 (종이포장)'}
          subcontent={'택배배송은 에코 포장이 스티로폼으로 대체됩니다.'}
          title={'포장타입'}
        />
        <ProductInformation content={'1봉'} title={'판매단위'} />
        <ProductInformation content={'123g*4봉'} title={'중량/용량'} />
        <ProductInformation content={'상세페이지 별도표기'} title={'원산지'} />
        <ProductInformation
          title={'알레르기정보'}
          allergycontent={
            '-대두, 밀, 쇠고기 함유\n-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조'
          }
        />
        <ProductPrice name={name} price={price} title={'상품선택'} />
        <p>총 상품금액:</p>
        <p>
          {price}
          <span>원</span>
        </p>
        <p>로그인 후, 적립 혜택 제공</p>
        {/* 찜 아이콘 버튼 */}
        {/* 알림 아이콘 버튼 */}
        <Button>장바구니 담기</Button>
      </section>
    </div>
  );
};

export default ProductDetailTable;
