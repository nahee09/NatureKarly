import PropTypes from 'prop-types';

import classes from './IconComponent.module.css';

export function IconComponent({ children, dataProps, ...restProps }) {
  const defaultOptions = {
    width: '30px',
    height: '30px',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  };
  const { width, height, backgroundPositionX, backgroundPositionY } = {
    ...defaultOptions,
    ...dataProps,
  };

  return (
    <div
      className={classes.IconComponent}
      style={{
        width,
        height,
        backgroundPositionX,
        backgroundPositionY,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
}

IconComponent.propTypes = {
  children: PropTypes.node,
  dataProps: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundPositionX: PropTypes.string,
    backgroundPositionY: PropTypes.string,
  }),
};
