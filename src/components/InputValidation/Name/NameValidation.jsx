import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { nameValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Name/NameValidation.module.css';

export function NameValidation({ className }) {
  const isValidate = useRecoilValue(nameValidation);
  const checkIsValidateId = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.nameValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 이름이네요!</div>}
      {!isValidate && <div className={combineClassName}>한글, 영문 조합</div>}
    </Fragment>
  );
}
