import { Children } from 'react';

import classes from './Heading.module.css';

export const HeadingTwo = function () {
  return <h2 className={classes.HeadingTwo}>{Children}</h2>;
};

export const HeadingThree = function () {
  return <h3 className={classes.HeadingThree}>{Children}</h3>;
};

export const HeadingFour = function () {
  return <h4 className={classes.HeadingFour}>{Children}</h4>;
};
