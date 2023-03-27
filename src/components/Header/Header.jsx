import { useState } from 'react';

import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import { Container, Navigation, Input, Label, A11yHidden } from '@/components';
import { IconComponent } from '@/components';

import location from '@/assets/icons/Icon/header/location.svg';
import heart from '@/assets/icons/Icon/header/heart.svg';
import cart from '@/assets/icons/Icon/header/Cart.svg';
import down from '@/assets/icons/Icon/header/iconDown1.svg';
import search from '@/assets/icons/Icon/header/Search.svg';
export default function Header({ navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  return (
    <header>
      <Container className={classes.header}>
        <div className={classes.headerTop}>
          <ul className={classes.topMenu}>
            <li>
              <a href="#">회원가입</a>
              <span aria-hidden="true">|</span>
            </li>
            <li>
              <a href="#">로그인</a>
              <span aria-hidden="true">|</span>
            </li>
            <li>
              <a href="#">
                고객센터
                <img src={down} alt="아래화살표" />
              </a>
            </li>
          </ul>
          <div className={classes.headerSearch}>
            <div className={classes.headerSwitch}>
              <Logo />
              <a href="#">마켓칼리</a>
              <span aria-hidden="true">|</span>
              <a href="#">뷰티칼리</a>
            </div>
            <form action="" className={classes.headerSearchForm}>
              <fieldset>
                <A11yHidden>검색 폼</A11yHidden>
                <Label htmlFor="검색" invisibleLabel={true}></Label>
                <Input type="search" placeholder="검색어를 입력해주세요" />
              </fieldset>
              <IconComponent>
                <img src={search} alt="검색아이콘" />
              </IconComponent>
            </form>
            <ul className={classes.headerIconList}>
              <li>
                <IconComponent>
                  <a href="#">
                    <img src={location} alt="배송지" />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img src={heart} alt="관심상품" />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img src={cart} alt="장바구니" />
                  </a>
                </IconComponent>
              </li>
            </ul>
          </div>
        </div>
        <Navigation headline="네비게이션" list={navList} />
      </Container>
    </header>
  );
}

Header.defaultProps = {
  navList: [],
};

const NavLinkType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

Header.propTypes = {
  navList: PropTypes.arrayOf(NavLinkType),
};
