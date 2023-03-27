import React, { useRef, useEffect, useState } from "react";

import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import { Container, Navigation, Input, Label, A11yHidden, NavSide } from '@/components';
import { IconComponent } from '@/components';

import location from '@/assets/icons/Icon/header/location.svg';
import heart from '@/assets/icons/Icon/header/heart.svg';
import cart from '@/assets/icons/Icon/header/Cart.svg';
import down from '@/assets/icons/Icon/header/iconDown1.svg';
import search from '@/assets/icons/Icon/header/Search.svg';
export default function Header({ navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY >= 166);
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isSticky) {
    return (
      <header className={classes.originHeader}>
        <Container className={classes.headerContainer}>
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
                <a href="#" className={classes.activeSwitch}>마켓칼리</a>
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
          <div className={classes.navWrapper}>
            <Navigation headline="네비게이션" list={navList} />
            <NavSide />
          </div>
        </Container>
      </header>
    );
  } else {
      return (
        <header className={classes.smallHeader}>
          <Container className={classes.headerContainer}>
            <div className={classes.smallHeaderTop}>
              <Navigation headline="네비게이션" list={navList} />
              <form action="" className={`${classes.headerSearchForm} ${classes.smallForm}`}>
                <fieldset>
                  <A11yHidden>검색 폼</A11yHidden>
                  <Label htmlFor="검색" invisibleLabel={true}></Label>
                  <Input type="search" placeholder="검색어를 입력해주세요" style={{ width : '200px', height: '12px', border: 'none', backgroundColor: 'var(--color-gray-50)' }} />
                </fieldset>
                <IconComponent>
                  <img src={search} alt="검색아이콘" />
                </IconComponent>
              </form>
              <ul className={`${classes.headerIconList} ${classes.smallHeaderIconList}`}>
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
          </Container>
        </header>
      );
    }

};

Header.propTypes = {
  navList: PropTypes.arrayOf(NavLinkType),
};

