import { bool, string } from 'prop-types';

import classes from './InternalLinkMove.module.css';

export function InternalLinkMove({ name, to, isNumberOption, className }) {
  function putNumberOption(isNumberOption) {
    if (isNumberOption) {
      return <span>{'(1,000)'}</span>;
    }
  }

  return (
    <li className={classes.internalLinkMove}>
      <a className={className} href={to}>
        {name}
        {putNumberOption(isNumberOption)}
      </a>
    </li>
  );
}

InternalLinkMove.defaultProps = {
  name: '리스트명',
  to: '',
  inNumberOption: false,
  className: '',
};

InternalLinkMove.propTypes = {
  name: string,
  to: string,
  inNumberOption: bool,
  className: string,
};
