import { Link } from 'react-router-dom';

import PropTypes, { arrayOf, oneOf, string, shape } from 'prop-types';

import { Menu } from '../Menu/Menu';

import classes from './Nav.module.css';

import { A11yHidden } from '@/components';

const NavigationItemType = shape({
  id: string,
  to: string,
  text: string,
});

const menuList = [
  { id: 'gift', text: '선물하기' },
  { id: 'vege', text: '채소' },
  { id: 'fruit', text: '과일·견과·쌀' },
  { id: 'fish', text: '수산·해산·건어물' },
  { id: 'egg', text: '정육·계란' },
  { id: 'main', text: '국·반찬·메인요리' },
  { id: 'salad', text: '샐러드·간편식' },
  { id: 'noodle', text: '면·양념·오일' },
  { id: 'bever', text: '생수·음료·우유·커피' },
  { id: 'snack', text: '간식·과자·떡' },
  { id: 'bakery', text: '베이커리·치즈·델리' },
  { id: 'health', text: '건강식품' },
  { id: 'wine', text: '와인' },
  { id: 'liquor', text: '전통주' },
  { id: 'living', text: '생활용품·리빙·캠핑' },
  { id: 'skin', text: '스킨케어·메이크업' },
  { id: 'hair', text: '헤어·바디·구강' },
  { id: 'kitchen', text: '주방용품' },
  { id: 'home', text: '가전제품' },
  { id: 'animal', text: '반려동물' },
  { id: 'baby', text: '베이비·키즈·완구' },
  { id: 'trip', text: '여행·티켓' },
];

export function Navigation({ as, headline, list, ...restProps }) {
  return (
    <>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <nav className={classes.nav} {...restProps}>
        <Menu menuList={menuList} />
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
