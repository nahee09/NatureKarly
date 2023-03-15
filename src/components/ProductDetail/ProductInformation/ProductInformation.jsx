import { Children } from 'react';

import classes from './ProductInformation.module.css';

export const ProductInformation = function () {
  return (
    <div className={classes.ProductInformation}>
      <p>{Children}</p>
      <div>
        <p>{Children}</p>
        <div className={classes.ProductInformationLight}>
          <p>{Children}</p>
          <p>{Children}</p>
        </div>
      </div>
    </div>
  );
};
