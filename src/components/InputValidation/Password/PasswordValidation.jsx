import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { pwValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Password/PasswordValidation.module.css';

export function PasswordValidation({ className }) {
  const isValidate = useRecoilValue(
    pwValidation({ min: 4, max: 20, isStrong: true })
  );
  const checkIsValidatePw = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.pwValidation
  } ${checkIsValidatePw()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 비밀번호네요!</div>}
      {!isValidate && (
        <div className={combineClassName}>
          6 ~ 16자 영문, 숫자, 특수문자 최소 한가지 조합
        </div>
      )}
    </Fragment>
  );
}
