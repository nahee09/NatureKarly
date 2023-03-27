import PropTypes from 'prop-types';

import { useRecoilState } from 'recoil';

import { additionalState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';
export function AdditionalInput({ id: useId, index, className, ...restProps }) {
  const [addition, setAddition] = useRecoilState(additionalState);
  const combineClassName = `${classes.input} ${className}`.trim();

  /**
   * checkbox input을 uncontrolled component로 못 만든이유
   * 배열로 다뤘기 때문에 기본배열값을 읽어오게 되면 부모에 state값을 읽어오게 되므로
   * 해당 컴포넌트가 모두 리렌더링이 일어남
   * 따라서 내부적으로 setState를 수행해야만 했다.
   */
  const handleAdditionInput = () => {
    const willUpdateAddition = [...addition];
    willUpdateAddition[index] = !willUpdateAddition[index];
    setAddition(willUpdateAddition);
  };

  return (
    <input
      checked={addition[index]}
      className={combineClassName}
      id={useId}
      type="checkbox"
      onChange={handleAdditionInput}
      {...restProps}
    />
  );
}

AdditionalInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
