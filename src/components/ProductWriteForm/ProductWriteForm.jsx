import { bool, node, string } from 'prop-types';

import { A11yHidden, Input } from '..';

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
        <input
          className={classes.formInput}
          id={inputName}
          maxLength="35"
          name={inputName}
          placeholder="제목을 입력해주세요"
          type="text"
        />
      </h4>
      <p>
        <label htmlFor={textName}>내용</label>
        <textarea
          className={classes.formText}
          defaultValue={content}
          id={textName}
          maxLength="5000"
          name={textName}
        ></textarea>
        <A11yHidden>
          <span>현재 글자수/제한 글자수</span>
        </A11yHidden>
        <span className={classes.numberOfCharacter}>{0}/5000</span>
      </p>
      {putCheckSecret(putSecretCheckbox)}
    </form>
  );
}

ProductWriteForm.defaultProps = {
  content: '내용 작성시 주의사항을 적어주세요.',
  putSecretCheckbox: false,
};

ProductWriteForm.propTypes = {
  id: string.isRequired,
  inputName: string.isRequired,
  textName: string.isRequired,
  content: node,
  putSecretCheckbox: bool,
};
