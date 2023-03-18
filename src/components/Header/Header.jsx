import { useState } from 'react';

import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import { Container, Navigation, Button, Input } from '@/components';

export function Header({ navList: initialNavList }) {
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
                <img src="" alt="" />
              </a>
            </li>
          </ul>
          <div className={classes.headerSearch}>
            <Logo />
            <div className={classes.headerSwitch}>
              <a href="#">마켓칼리</a>
              <span aria-hidden="true">|</span>
              <a href="#">뷰티칼리</a>
            </div>
            <Input type={'search'} placeholder="검색어를 입력해주세요" />
            
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
