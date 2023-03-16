import { node, string } from 'prop-types';

import classes from './Layout.module.css';

import { Header, Container } from '@/components';

import { getPathFromBaseUrl as baseURL } from '@/utils';

const navList = [
  { id: 'new', to: baseURL('new'), text: '신상품'},
  { id: 'best', to: baseURL('best'), text: '베스트'},
  { id: 'rational', to: baseURL('rational'), text: '알뜰쇼핑'},
  { id: 'discount', to: baseURL('discount'), text: '특가/혜택'},
];

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Container>
        <Header logoLabel="Karly" navList={navList} />
        <main>{children}</main>
      </Container>
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
