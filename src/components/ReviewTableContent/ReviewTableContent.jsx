import {} from 'prop-types';

import { Tag } from '..';

import classes from './ReviewTableContent.module.css';

export function ReviewTableContent() {
  return (
    <tr className={classes.reviewTableContent}>
      <td>
        <Tag className={classes.tag} tagType="bestTag">
          {'베스트'}
        </Tag>
        <Tag className={classes.tag} tagType="ratingTag">
          {'그린'}
        </Tag>
        {'이*석'}
      </td>
      <td className={classes.content} colSpan="6">
        <div>{'[풀무원] 탱탱쫄면 (4개입)'}</div>
        <p>{'너무 맛있어요~ 면이 쫄깃 양념 짱~'}</p>
        <time dateTime={'2023-03-15'}>{'2023.03.15'}</time>
      </td>
    </tr>
  );
}
