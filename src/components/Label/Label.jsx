import PropTypes from 'prop-types';

import classes from './Label.module.css';
import { A11yHidden } from '@/components';

function classEssential(isEssential) {
  if (isEssential) {
    return classes.essential;
  }

  return '';
}

/* ----------------------------------------------------------------------- */

export function Label({
  htmlFor,
  isEssential,
  invisibleLabel,
  labelStyle,
  ...restProps
}) {
  const combineClassNames = `${classes.label} ${
    classes[labelStyle]
  } ${classEssential(isEssential)}`.trim();
  if (!invisibleLabel) {
    return (
      <label className={combineClassNames} htmlFor={htmlFor} {...restProps}>
        {htmlFor}
      </label>
    );
  }

  return (
    <A11yHidden as="label" className={classes.label} htmlFor={htmlFor}>
      {htmlFor}
    </A11yHidden>
  );
}

/* Props -------------------------------------------------------------------- */

Label.defaultProps = {
  htmlFor: '',
  isEssential: false,
  invisibleLabel: false,
  labelStyle: 'Medium',
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  isEssential: PropTypes.bool,
  invisibleLabel: PropTypes.bool,
  labelStyle: PropTypes.oneOf(['Small', 'Medium', 'Large', 'XL', 'XXL']),
};
