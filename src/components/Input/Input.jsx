import PropTypes from 'prop-types';

import classes from './Input.module.css';

export function Input({ id, type, ...restProps }) {
  return <input className={classes.input} id={id} type={type} {...restProps} />;
}

/* Props -------------------------------------------------------------------- */

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
};
