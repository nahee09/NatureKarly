import { node, string } from 'prop-types';

import { A11yHidden } from '..';

import classes from './ProductTable.module.css';

export function ProductTable({ id, summary, captionName, tableContent }) {
  return (
    <>
      <A11yHidden>
        <p id={id}>{summary}</p>
      </A11yHidden>
      <table aria-describedby={id} className={classes.productTable}>
        <caption>
          <A11yHidden>{captionName}</A11yHidden>
        </caption>
        {tableContent}
      </table>
    </>
  );
}

ProductTable.defaultProps = {
  id: 'id',
  summary: ' 테이블 요약내용',
  captionName: 'caption',
};

ProductTable.propTypes = {
  id: string,
  summary: string,
  captionName: string,
  tableContent: node,
};
