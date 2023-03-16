import { Label } from './Label';

export default {
  title: 'Form/Label',
  component: Label,
  tags: ['autodocs'],
  args: { ...Label.defaultProps },
};

export const DefaultLabel = {
  args: {
    htmlFor: 'Label',
    isEssential: false,
    invisibleLabel: false,
  },
};
DefaultLabel.storyName = '선택 Label';

export const EssentialLabel = {
  args: {
    htmlFor: 'Label',
    isEssential: true,
    invisibleLabel: false,
  },
};
EssentialLabel.storyName = '필수 Label';
