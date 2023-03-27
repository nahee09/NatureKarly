import {} from 'prop-types';

import { TableNoticeHeader } from '..';

export function InquiryTitle() {
  return (
    <TableNoticeHeader
      additional={true}
      isNoticeTag={false}
      noticeTitle={'팩이 터져서 왔어요'}
    />
  );
}
