import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { pwState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';

export function PwInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const pw = useRecoilValue(pwState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      placeholder={placeholder}
      type="password"
      value={pw}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

PwInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
