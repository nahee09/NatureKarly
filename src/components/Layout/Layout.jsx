import { node, string } from 'prop-types';

import Footer from '../Footer/Footer';

import Header from '../Header/Header';

import classes from './Layout.module.css';

const navList = [
  { id: 'new', to: '/new', text: '신상품'},
  { id: 'best', to: '/best', text: '베스트'},
  { id: 'rational', to: '/rational', text: '알뜰쇼핑'},
  { id: 'discount', to: '/discount', text: '특가/혜택'},
];

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();
  
  return (
    <div className={combineClassNames} {...restProps}>
      <Header navList={navList} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

BaseLayout.defaultProps = {
  className: '',
};

BaseLayout.propTypes = {
  className: string,
  children: node,
};
