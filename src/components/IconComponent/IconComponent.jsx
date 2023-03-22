import PropTypes from 'prop-types';

import classes from './IconComponent.module.css';

export function IconComponent({
  className,
  children,
  dataProps,
  ...restProps
}) {
  const defaultOptions = {
    width: '30px',
    height: '30px',
    fontSize: '1rem',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  };
  const { width, height, fontSize, backgroundPositionX, backgroundPositionY } =
    {
      ...defaultOptions,
      ...dataProps,
    };
  const combineClassNames = `${classes.iconComponent} ${className}`.trim();

  return (
    <div
      className={combineClassNames}
      style={{
        width,
        height,
        fontSize,
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
    fontSize: PropTypes.string,
    backgroundPositionX: PropTypes.string,
    backgroundPositionY: PropTypes.string,
  }),
};
