import PropTypes from 'prop-types';

import { useRecoilValue, useRecoilState } from 'recoil';

import { etcIsAllAgree, etcState } from '@/@store/signUpState';
import classes from '@/components/Input/General/Input.module.css';
export function EtcInput({
  id: useId,
  index,
  className,
  isControllAll,
  ...restProps
}) {
  const [etc, setEtc] = useRecoilState(etcState);
  const isAllAgree = useRecoilValue(etcIsAllAgree);
  const combineClassName = `${classes.input} ${className}`.trim();

  /**
   * checkbox input을 uncontrolled component로 못 만든이유
   * 배열로 다뤘기 때문에 기본배열값을 읽어오게 되면 부모에 state값을 읽어오게 되므로
   * 해당 컴포넌트가 모두 리렌더링이 일어남
   * 따라서 내부적으로 setState를 수행해야만 했다.
   */
  const handleEtcInput = () => {
    if (!isControllAll) {
      const willUpdateEtc = [...etc];
      willUpdateEtc[index] = !willUpdateEtc[index];
      setEtc(willUpdateEtc);

      return;
    }
    if (etc.includes(false)) setEtc([true, true, true, true]);
    else setEtc([false, false, false, false]);
  };

  const getByCheckedValue = () => {
    if (isControllAll) return isAllAgree;

    return etc[index];
  };

  return (
    <input
      checked={getByCheckedValue()}
      className={combineClassName}
      id={useId}
      type="checkbox"
      onChange={handleEtcInput}
      {...restProps}
    />
  );
}

EtcInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
