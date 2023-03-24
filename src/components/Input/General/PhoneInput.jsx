import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { phoneState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function PhoneInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const phone = useRecoilValue(phoneState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      placeholder={placeholder}
      type="tel"
      value={phone}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

PhoneInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
