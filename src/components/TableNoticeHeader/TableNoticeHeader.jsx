import { bool, string } from 'prop-types';

import { Tag } from '..';

import classes from './TableNoticeHeader.module.css';

export function TableNoticeHeader({ additional, noticeTitle, isNoticeTag }) {
  function addColumn(additional) {
    if (additional) {
      return (
        <>
          <td>{'칼리'}</td>
          <td>
            <time dateTime={'2023-03-15'}>{'2023.03.15'}</time>
          </td>
          <td>{'-'}</td>
        </>
      );
    }
  }

  function addNoticeTag(isNoticeTag) {
    if (isNoticeTag) {
      return (
        <Tag className={classes.tag} tagType="noticeTag">
          {'공지'}
        </Tag>
      );
    }
  }

  return (
    <tr className={classes.colSpanCell}>
      <td colSpan={additional ? null : 4}>
        <button className={classes.title} type="button">
          {addNoticeTag(isNoticeTag)}
          {noticeTitle}
        </button>
      </td>
      {addColumn(additional)}
    </tr>
  );
}

TableNoticeHeader.defaultProps = {
  additional: false,
  noticeTitle: '제목을 입력하세요.',
  isNoticeTag: true,
};

TableNoticeHeader.propTypes = {
  additional: bool,
  noticeTitle: string,
  isNoticeTag: bool,
};
