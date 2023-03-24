import PropTypes from 'prop-types';

import classes from './Title.module.css';

export function Title({ as: Component, ...restProps }) {
  return <Component className={classes.title} {...restProps} />;
}

/* Props -------------------------------------------------------------------- */

Title.defaultProps = {
  as: 'h2',
};

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
