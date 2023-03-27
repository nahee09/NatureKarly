import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { nameState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function NameInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const name = useRecoilValue(nameState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="40"
      placeholder={placeholder}
      type="text"
      value={name}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

NameInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
