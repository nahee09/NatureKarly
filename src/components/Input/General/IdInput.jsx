import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { idState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function IdInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const id = useRecoilValue(idState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="20"
      placeholder={placeholder}
      type="text"
      value={id}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

IdInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
