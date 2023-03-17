import { node, oneOf, string } from 'prop-types';

import classes from './Tag.module.css';

export function Tag({
  children,
  className,
  tagType,
  borderRadius,
  padding,
  fontSize,
  ...restProps
}) {
  const combineClassNames =
    `${classes[tagType]} ${classes[borderRadius]} ${className}`.trim();

  return (
    <span
      className={combineClassNames}
      style={{ padding: padding, fontSize: fontSize }}
      {...restProps}
    >
      {children}
    </span>
  );
}

Tag.defaultProps = {
  borderRadius: 'borderRadiusDefault',
  fontSize: '0.75rem',
  padding: '0 0.5rem',
};

Tag.propTypes = {
  tagType: oneOf(['noticeTag', 'bestTag', 'ratingTag', 'savingTag']),
  borderRadius: oneOf(['borderRadiusDefault', 'borderRadiusMedium']),
  padding: string,
  fontSize: string,
  children: node,
};
