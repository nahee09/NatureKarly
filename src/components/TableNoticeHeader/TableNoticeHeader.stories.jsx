import { TableNoticeHeader } from './TableNoticeHeader';

export default {
  title: 'Components/TableNoticeHeader',
  component: TableNoticeHeader,
  tags: ['autodocs'],
  args: { ...TableNoticeHeader.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Default = {
  args: {},
};

export const Additional = {
  args: { additional: true },
};

export const IsNotNoticeTag = {
  args: { isNoticeTag: false, noticeTitle: '팩이 터져서 왔어요' },
};
