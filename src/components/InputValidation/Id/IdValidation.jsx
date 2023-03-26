import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { idValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Id/IdValidation.module.css';

export function IdValidation({ className }) {
  const isValidate = useRecoilValue(idValidation({ min: 4, max: 20 }));
  const checkIsValidateId = () => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.idValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {isValidate && <div className={combineClassName}>멋진 아이디네요!</div>}
      {!isValidate && (
        <div className={combineClassName}>5 ~ 20자 영문, 숫자 조합</div>
      )}
    </Fragment>
  );
}
