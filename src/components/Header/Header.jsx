import { useState } from 'react';

import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import { Container, Navigation } from '@/components';

export function Header({ logoLabel, navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  return (
    <header>
      <Container className={classes.Header}>
        <Logo>{logoLabel}</Logo>
        <Navigation headline="네비게이션" list={navList} />
      </Container>
    </header>
  );
}

Header.defaultProps = {
  navList: [],
  logoLabel: '',
};

const NavLinkType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
})


Header.propTypes = {
  navList: PropTypes.arrayOf(NavLinkType),
  logoLabel: PropTypes.string,
};
