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

export const EssentialLabel = {
  args: {
    htmlFor: 'Label',
    isEssential: true,
    invisibleLabel: false,
  },
};
