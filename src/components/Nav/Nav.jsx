import classes from './Nav.module.css';
import PropTypes from 'prop-types';

export function Nav(){
  return(
    <nav className={classes.nav}>
      <div className={classes['nav-category']}>
        카테고리
      </div>
      <ul className={classes['nav-menu']}>
        <li><a href='#'>신상품</a></li>
        <li><a href='#'>베스트</a></li>
        <li><a href='#'>알뜰쇼핑</a></li>
        <li><a href='#'>특가/혜택</a></li>
      </ul>
      <a href='#' className={classes['nav-side']}>
        <span>샛별·낮</span>
        <span> 배송안내</span>
      </a>
    </nav>
  );
}