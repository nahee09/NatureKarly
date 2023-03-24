import PropTypes, { arrayOf, oneOf, string, shape } from 'prop-types';

import { Menu } from '../Menu/Menu';

import classes from './Nav.module.css';

import { A11yHidden } from '@/components';

const NavigationItemType = shape({
  id: string,
  to: string,
  text: string,
});

export function Navigation({ as, headline, list, ...restProps }) {
  return (
    <>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <nav className={classes.nav} {...restProps}>
        <Menu />
        <ul className={classes.navMenu}>
          {list.map((item) => (
            <li key={item.id}>
              <a href={item.to}>{item.text}</a>
            </li>
          ))}
        </ul>
        <a href='#' className={classes.navSide}>
          <span>샛별·낮</span>
          <span> 배송안내</span>
        </a>
      </nav>
    </>
  );
}

Navigation.defaultProps = {
  as: 'h2',
};

Navigation.propTypes = {
  as: oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  headline: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(NavigationItemType).isRequired,
};
