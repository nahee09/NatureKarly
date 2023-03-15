// import PropTypes from 'prop-types';

import classes from './IconComponent.module.css';

export function IconComponent({ children, ...restProps }) {
  return (
    <div className={classes.IconComponent} {...restProps}>
      {children}
    </div>
  );
}

// IconComponent.defaultProps = {};

// IconComponent.propTypes = {};
