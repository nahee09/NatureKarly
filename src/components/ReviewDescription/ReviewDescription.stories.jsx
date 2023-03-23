import { ReviewDescription } from './ReviewDescription';

export default {
  title: 'Components/ReviewDescription',
  component: ReviewDescription,
  tags: ['autodocs'],
  args: { ...ReviewDescription.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Example = {
  args: {
    title: '제목',
    subTitle: '서브제목',
    description: ['내용1', '내용2'],
  },
};
