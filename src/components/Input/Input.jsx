import PropTypes from 'prop-types';

import classes from './Input.module.css';

export function Input({ type, ...restProps }) {
  return <input className={classes.input} type={type} {...restProps} />;
}

/* Props -------------------------------------------------------------------- */

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
};
