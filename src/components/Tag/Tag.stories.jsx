import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { ...Tag.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const NoticeTag = {
  args: {
    tagType: 'noticeTag',
    children: '공지',
  },
};

export const BestTag = {
  args: {
    tagType: 'bestTag',
    children: '베스트',
  },
};

export const RatingTag = {
  args: {
    tagType: 'ratingTag',
    children: '그린',
  },
};

export const SavingTag1 = {
  args: {
    tagType: 'savingTag',
    borderRadius: 'borderRadiusDefault',
    children: '적립',
  },
};

export const SavingTag2 = {
  args: {
    tagType: 'savingTag',
    borderRadius: 'borderRadiusMedium',
    padding: '4px 8px',
    fontSize: '10px',
    children: '적립',
  },
};
