import { string, node, oneOf } from 'prop-types';

import classes from './Container.module.css';

export function Container({
  as: Component,
  className,
  children,
  align,
  width,
  ...restProps
}) {
  const combineClassNames =
    `${classes[align]} ${classes[width]} ${className}`.trim();

  return (
    <Component className={combineClassNames} {...restProps}>
      {children}
    </Component>
  );
}

Container.defaultProps = {
  as: 'div',
  className: '',
  align: 'center',
  width: 'widthLarge',
};

Container.propTypes = {
  as: string,
  className: string,
  children: node,
  align: oneOf(['center', 'left', 'right']),
  width: oneOf(['widthSmall', 'widthMedium', 'widthLarge']),
};
