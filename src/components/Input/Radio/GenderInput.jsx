import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { genderState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function GenderInput({
  id: useId,
  value,
  className,
  onClick,
  ...restProps
}) {
  const gender = useRecoilValue(genderState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      checked={value === gender}
      className={combineClassName}
      id={useId}
      type="radio"
      value={value}
      onChange={(e) => debounce(onClick(e, 500))}
      {...restProps}
    />
  );
}
GenderInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
