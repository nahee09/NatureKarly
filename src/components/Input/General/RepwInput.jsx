import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { repwState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';

export function RepwInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const repw = useRecoilValue(repwState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="16"
      placeholder={placeholder}
      type="password"
      value={repw}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

RepwInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
