import { string } from 'prop-types';

import { IconComponent } from '..';

import classes from './EmptyContent.module.css';

export function EmptyContent({ children }) {
  return (
    <>
      <tr className={classes.empty}>
        <td colSpan="4">
          <IconComponent data-image="notice" />
          {children}
        </td>
      </tr>
    </>
  );
}

EmptyContent.defaultProps = {
  children: '내용을 적으세요.',
};

EmptyContent.propTypes = {
  children: string,
};
