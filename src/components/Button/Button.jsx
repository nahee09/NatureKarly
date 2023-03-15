import PropTypes from 'prop-types';

<<<<<<< HEAD
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/utils';

// import { getColor } from '@/theme/utils';
// import { useTheme } from '@/theme/ThemeContext';

import classes from './Button.module.css';

function getClassName(isSecondary, disabled) {
  let buttonStyle = {};

  if (!disabled) {
    buttonStyle = {
      backgroundColor: !isSecondary
        ? getColor('primary/400')
        : getColor('white'),
      color: !isSecondary ? getColor('white') : getColor('primary/400'),
    };
  } else {
    buttonStyle = {
      backgroundColor: !isSecondary
        ? getColor('primary/50')
        : getColor('gray/50'),
      color: !isSecondary ? getColor('primary/400') : getColor('gray/300'),
    };
  }

  return buttonStyle;
}

export function Button({ secondary: isSecondary, disabled, ...restProps }) {
  const theme = useTheme();
  console.log('theme', theme);

  return (
    <button
      className={classes.Button}
      disabled={disabled}
      style={getClassName(isSecondary, disabled)}
      type="button"
      {...restProps}
    />
=======
import classes from './Button.module.css';

function calIsSecondary(isSecondary) {
  if (isSecondary) return 'secondary';

  return 'primary';
}
export function Button({ isSecondary, children, ...restProps }) {
  return (
    <button
      type="button"
      className={[classes.Button, classes[calIsSecondary(isSecondary)]].join(
        ' '
      )}
      {...restProps}
    >
      {children}
    </button>
>>>>>>> 393e637a0fbc48017a77b883391e3a351c91452a
  );
}

Button.defaultProps = {
<<<<<<< HEAD
  secondary: false,
  disabled: false,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
=======
  isSecondary: false,
};

Button.propTypes = {
  isSecondary: PropTypes.bool,
>>>>>>> 393e637a0fbc48017a77b883391e3a351c91452a
};
