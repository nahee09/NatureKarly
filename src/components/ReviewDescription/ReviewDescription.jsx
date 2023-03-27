import { array, string } from 'prop-types';

import { ReviewWriteButton } from '..';

import classes from './ReviewDescription.module.css';

export function ReviewDescription({
  title,
  subTitle,
  description,
  buttonName,
  ...restProps
}) {
  return (
    <div className={classes.detailDescription} {...restProps}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <ul>
        {description &&
          description.map((list, index) => <li key={index}>{list}</li>)}
      </ul>
      <ReviewWriteButton buttonName={buttonName} />
    </div>
  );
}

ReviewDescription.defaultProps = {
  title: '',
  subTitle: '',
  description: [],
  buttonName: 'button 이름',
};

ReviewDescription.propTypes = {
  title: string,
  subTitle: string,
  description: array,
  buttonName: string,
};
