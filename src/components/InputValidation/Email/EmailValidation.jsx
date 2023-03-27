import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { emailValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Email/EmailValidation.module.css';

export function EmailValidation({ className }) {
  const isValidate = useRecoilValue(emailValidation);
  const checkIsValidateId = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.emailValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 이메일이네요!</div>}
      {!isValidate && (
        <div className={combineClassName}>잘못된 형식입니다.</div>
      )}
    </Fragment>
  );
}
