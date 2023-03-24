import { bool, node, string } from 'prop-types';

import { A11yHidden, Input, ProductPopUpContent, ProductPopUpInput } from '..';

import classes from './ProductWriteForm.module.css';

export function ProductWriteForm({
  id,
  inputName,
  textName,
  content,
  putSecretCheckbox,
}) {
  function putCheckSecret(isPut) {
    if (isPut) {
      return (
        <div className={classes.checkSecret}>
          <Input id="secret" name="secret" type="checkbox" value="true" />
          <label htmlFor="secret">비밀글로 문의하기</label>
        </div>
      );
    }
  }

  return (
    <form action="/" className={classes.productForm} id={id} method="GET">
      <h4>
        <label htmlFor={inputName}>제목</label>
        <ProductPopUpInput inputName={inputName} />
      </h4>
      <div className={classes.textContent}>
        <label htmlFor={textName}>내용</label>
        <ProductPopUpContent content={content} textName={textName} />
        <span className={classes.numberOfCharacter}>
          <A11yHidden>
            <span>현재 글자수/제한 글자수</span>
          </A11yHidden>
          {0}/5000
        </span>
      </div>
      {putCheckSecret(putSecretCheckbox)}
    </form>
  );
}

ProductWriteForm.defaultProps = {
  content: '내용 작성시 주의사항을 적어주세요.',
  putSecretCheckbox: false,
  textName: '',
};

ProductWriteForm.propTypes = {
  id: string.isRequired,
  inputName: string.isRequired,
  textName: string.isRequired,
  content: node,
  putSecretCheckbox: bool,
};
