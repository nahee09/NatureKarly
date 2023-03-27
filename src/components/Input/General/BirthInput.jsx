import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import { birthState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';

import { debounce } from '@/util/debounce';
export function BirthInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const birth = useRecoilValue(birthState);
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      placeholder={placeholder}
      type="text"
      value={birth}
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

BirthInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
