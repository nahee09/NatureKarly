import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { emailState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function EmailInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const email = useRecoilValue(emailState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="50"
      placeholder={placeholder}
      type="email"
      value={email}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

EmailInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
