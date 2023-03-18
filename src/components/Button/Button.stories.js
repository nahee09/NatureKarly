import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...Button.defaultProps, children: 'Default' },
};

export const Default = {
  args: {
    isSecondary: false,
    children: 'Primary',
  },
};

export const Secondary = {
  args: {
    isSecondary: true,
    children: 'Secondary',
  },
};
