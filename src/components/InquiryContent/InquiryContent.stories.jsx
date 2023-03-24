import { InquiryContent } from './InquiryContent';

export default {
  title: 'Components/InquiryContent',
  component: InquiryContent,
  tags: ['autodocs'],
  args: { ...InquiryContent.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Default = {
  args: {},
};

export const addTime = {
  args: { addTime: true },
};
