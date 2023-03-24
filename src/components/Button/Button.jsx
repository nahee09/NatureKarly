import PropTypes from 'prop-types';

import classes from './Button.module.css';

function calIsSecondary(isSecondary) {
  if (isSecondary) return 'secondary';

  return 'primary';
}
export function Button({ isSecondary, children, ...restProps }) {
  return (
    <button
      type="button"
      className={[classes.Button, classes[calIsSecondary(isSecondary)]].join(
        ' '
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSecondary: false,
};

Button.propTypes = {
  isSecondary: PropTypes.bool,
};