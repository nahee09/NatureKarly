import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { phoneValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Phone/PhoneValidation.module.css';

export function PhoneValidation({ className }) {
  const isValidate = useRecoilValue(phoneValidation({ withoutHypen: true }));
  const checkIsValidateId = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.phoneValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 전화번호네요!</div>}
      {!isValidate && (
        <div className={combineClassName}>잘못된 형식입니다.</div>
      )}
    </Fragment>
  );
}
