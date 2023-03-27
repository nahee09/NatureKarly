import { useState } from 'react';

import { string, node } from 'prop-types';

import { useRecoilState } from 'recoil';

import classes from './ProductPopUpContent.module.css';
import { contentText } from '@/@store/popUpTextState';

export function ProductPopUpContent({ textName, content }) {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useRecoilState(contentText);

  function visiblePlaceHolder() {
    if (visible && text.length < 1) {
      return <div className={classes.textPlaceHolder}>{content}</div>;
    }
  }

  function visibleText() {
    setVisible(!visible);
  }

  function getText(e) {
    setText(e.target.value);
  }

  return (
    <div className={classes.textWrapper}>
      <textarea
        className={classes.formText}
        id={textName}
        maxLength="5000"
        name={textName}
        onChange={getText}
        onClick={visibleText}
      ></textarea>
      {visiblePlaceHolder()}
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
