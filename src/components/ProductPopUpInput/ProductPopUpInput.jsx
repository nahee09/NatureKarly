import {} from 'prop-types';

import classes from './ProductPopUpInput.module.css';

export function ProductPopUpInput({ inputName }) {
  return (
    <input
      className={classes.formInput}
      id={inputName}
      maxLength="35"
      name={inputName}
      placeholder="제목을 입력해주세요"
      type="text"
    />
  );
}
