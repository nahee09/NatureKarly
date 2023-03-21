import { bool, string } from 'prop-types';

import classes from './InternalLinkMove.module.css';

export function InternalLinkMove({
  name,
  to,
  isNumberOption,
  id,
  className,
  ...restProps
}) {
  function putNumberOption(isNumberOption) {
    if (isNumberOption) {
      return <span>{'(1,000)'}</span>;
    }
  }

  return (
    <li key={id} className={classes.internalLinkMove} {...restProps}>
      <a className={className} href={to}>
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
};

InternalLinkMove.propTypes = {
  id: string,
  name: string,
  to: string,
  isNumberOption: bool,
  className: string,
};
