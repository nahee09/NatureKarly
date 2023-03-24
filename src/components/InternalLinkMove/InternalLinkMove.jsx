import { bool, string } from 'prop-types';

import classes from './InternalLinkMove.module.css';

export function InternalLinkMove({
  name,
  to,
  isNumberOption,
  id,
  className,
  anchorClass,
  ...restProps
}) {
  function putNumberOption(isNumberOption) {
    if (isNumberOption) {
      return <span>{'(1,000)'}</span>;
    }
  }

  const combineClassName = `${classes.internalLinkMove} ${className}`.trim();

  return (
    <li key={id} className={combineClassName} id={id} {...restProps}>
      <a className={anchorClass} href={to}>
        {name}
        {putNumberOption(isNumberOption)}
      </a>
    </li>
  );
}

InternalLinkMove.defaultProps = {
  id: '',
  name: '리스트명',
  to: '',
  isNumberOption: false,
  className: '',
  anchorClass: '',
};

InternalLinkMove.propTypes = {
  id: string,
  name: string,
  to: string,
  isNumberOption: bool,
  className: string,
  anchorClass: string,
};
