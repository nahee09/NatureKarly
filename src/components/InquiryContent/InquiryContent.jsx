import { bool, string } from 'prop-types';

import { A11yHidden, IconComponent } from '..';

import classes from './InquiryContent.module.css';

export function InquiryContent({ title, iconName, content, addTime }) {
  function addTimeTag(addTime) {
    if (addTime) {
      return <time dateTime={'2023-03-15'}>{'2023.03.15'}</time>;
    }
  }

  return (
    <tr className={classes.inquiryContent}>
      <td colSpan="4">
        <div className={classes.contentWrapper}>
          <A11yHidden>{title}</A11yHidden>
          <IconComponent data-image={iconName} />
          <span className={classes.content}>
            <span>{content}</span>
            {addTimeTag(addTime)}
          </span>
        </div>
      </td>
    </tr>
  );
}

InquiryContent.defaultProps = {
  title: '제목',
  iconName: '아이콘파일명',
  content: '내용',
  addTime: false,
};

InquiryContent.propTypes = {
  title: string,
  iconName: string,
  content: string,
  addTime: bool,
};
