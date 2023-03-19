import classes from './Footer.module.css';

import { Container, IconComponent } from '@/components';




export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <Container>
        <section className={classes.customerService}>
          <h2>고객행복센터</h2>
          <b>1644-1107</b>
          <span>월~토요일 오전 7시 - 오후 6시</span>
          <ul>
            <li>
              <button>카카오톡 문의</button>
              <div>
                <p>월~토요일 <span aria-hidden="true">|</span> 오전 7시 - 오후 6시</p>
                <p>일/공휴일 <span aria-hidden="true">|</span> 오전 7시 - 오후 1시</p>
              </div>
            </li>
            <li>
              <button>1:1 문의</button>
              <div>
                  <p>365일</p>
                  <p>고객센터 운영시간에 순착적으로 답변드리겠습니다.</p>
              </div>
            </li>
            <li>
              <button>대량주문 문의</button>
              <div>
                <p>월~금요일 <span aria-hidden="true">|</span> 오전 9시 - 오후 6시</p>
                <p>점심시간 <span aria-hidden="true">|</span> 낮 12시 - 오후 1시</p>
              </div>
            </li>
          </ul>
          <span>비회원 문의 : </span><a href="#">help@karlycorp.com</a><br/>
          <span>비회원 대량주문 문의 : </span><a href="#">help@karlycorp.com</a>
        </section>
        <section className={classes.about}>
          <ul>
            <li>칼리소개</li>
            <li>칼리소개영상</li>
            <li>인재채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <p>
            법인명(상호) : 주식회사 컬리 <span aria-hidden="true">|</span> 사업자등록번호 : 261-81-23567 <span aria-hidden="true">|</span> 
            <a href='#' className={classes.primaryColor}>사업자정보 확인</a> 
          </p>
          <p>
            통신판매업 : 제 2018-서울강남-01646 호 <span aria-hidden="true">|</span> 개인정보보호책임자 : 이원준
          </p>
          <address>
            주소 : 서울특별시 강남구 테헤란로 133,18층(역삼동) <span aria-hidden="true">|</span> 대표이사 : 김슬아 <br/>
            <span>입점문의 : </span><a href="#">입점문의하기</a> <span aria-hidden="true">|</span> <span>제휴문의 : </span><a href="#" class="primary-color">business@kurlycorp.com</a><br/>
            <span>채용문의 : </span><a href="#" class="primary-color">recruit@kurlycorp.com</a><br/>
            <span>팩스 : </span>070-7500-6098
          </address>
          <ul>
            <li>
              <IconComponent>
                <a href='#'><img src="" alt="" /></a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href='#'><img src="" alt="" /></a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href='#'><img src="" alt="" /></a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href='#'><img src="" alt="" /></a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href='#'><img src="" alt="" /></a>
              </IconComponent>
            </li>
          </ul>
        </section>

        <ul>
          <li>
            <IconComponent>
              <img src="" alt="" />
            </IconComponent>
            <div>
              <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발 운영</p>
              <p>(심사받지 않은 물리적 인프라 제외)</p>
              <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
            </div>
          </li>
          <li>
            <IconComponent>
              <img src="" alt="" />
            </IconComponent>
            <div>
              <p>개인정보보호 우수 웹사이트</p>
              <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
            </div>
          </li>
          <li>
            <IconComponent>
              <img src="" alt="" />
            </IconComponent>
            <p>토스페이먼츠 구매안전(에스크로) 서비스<br/>를 이용하실 수 있습니다.</p>
          </li>
          <li>
            <IconComponent>
              <img src="" alt="" />
            </IconComponent>
            <p>고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보<br/>증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
          </li>
        </ul>
      </Container>
    </footer>
  );
}



