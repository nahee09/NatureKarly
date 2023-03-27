import PropTypes from 'prop-types';

import classes from './Title.module.css';

export function Title({ as: Component, className, titleStyle, ...restProps }) {
  const combinedClassNames =
    `${classes[titleStyle]} ${classes.title} ${className}`.trim();

  return <Component className={combinedClassNames} {...restProps} />;
}

/* Props -------------------------------------------------------------------- */

Title.defaultProps = {
  as: 'h2',
  titleStyle: 'Large',
};

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  titleStyle: PropTypes.oneOf(['Medium', 'Large', 'XL', 'XXL', 'XXXL']),
};
