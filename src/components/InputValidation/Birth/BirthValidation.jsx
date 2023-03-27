import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { birthValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Birth/BirthValidation.module.css';

export function BirthValidation({ className }) {
  const isValidate = useRecoilValue(birthValidation);
  const checkIsValidateId = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.birthValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 생일날이네요!</div>}
      {!isValidate && (
        <div className={combineClassName}>잘못된 형식입니다.</div>
      )}
    </Fragment>
  );
}
