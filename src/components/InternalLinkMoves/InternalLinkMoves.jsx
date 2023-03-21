import { array, string } from 'prop-types';

import { A11yHidden, InternalLinkMove } from '..';

import classes from './InternalLinkMoves.module.css';

export function InternalLinkMoves({ list, title, ...restProps }) {
  return (
    <>
      <A11yHidden>
        <h3>{title}</h3>
      </A11yHidden>
      <ul className={classes.detailMenuList} {...restProps}>
        {list.map(({ id, name, to, isNumberOption }) => (
          <InternalLinkMove
            key={id}
            id={id}
            isNumberOption={isNumberOption}
            name={name}
            to={to}
          />
        ))}
      </ul>
    </>
  );
}

InternalLinkMoves.defaultProps = {
  list: [
    { id: 'id값', name: '개별 리스트 이름', to: '이동할 곳' },
    { id: 'id값', name: '개별 리스트 이름', to: '이동할 곳' },
    { id: 'id값', name: '개별 리스트 이름', to: '이동할 곳' },
    { id: 'id값', name: '개별 리스트 이름', to: '이동할 곳' },
  ],
  title: '전체리스트명',
};

InternalLinkMoves.propTypes = {
  list: array,
  title: string,
};
