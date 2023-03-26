import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { repwValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/RePassword/RePasswordValidation.module.css';

export function RePasswordValidation({ className }) {
  const isValidate = useRecoilValue(repwValidation);
  const checkIsValidatePw = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.repwValidation
  } ${checkIsValidatePw()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && (
        <div className={combineClassName}>비밀번호가 일치합니다!</div>
      )}
      {!isValidate && (
        <div className={combineClassName}>비밀번호가 일치하지 않습니다.</div>
      )}
    </Fragment>
  );
}
