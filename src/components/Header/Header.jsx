import { useState } from 'react';

import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import { Container, Navigation } from '@/components';

export function Header({ navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  return (
    <header>
      <Container className={classes.Header}>
        <Logo />
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
