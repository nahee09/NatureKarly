import { string, node } from 'prop-types';

import classes from './ProductPopUpContent.module.css';

export function ProductPopUpContent({ textName, content }) {
  return (
    <div className={classes.textWrapper}>
      <textarea
        className={classes.formText}
        id={textName}
        maxLength="5000"
        name={textName}
      ></textarea>
      <div className={classes.textPlaceHolder}>{content}</div>
    </div>
  );
}

ProductPopUpContent.defaultProps = {
  content: '내용 작성시 주의사항을 적어주세요.',
  textName: '',
};

ProductPopUpContent.propTypes = {
  textName: string.isRequired,
  content: node,
};
