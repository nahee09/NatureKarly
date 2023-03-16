import { Input } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: { ...Input.defaultProps },
};

export const TextInput = {
  args: {
    type: 'text',
  },
};

export const SearchInput = {
  args: {
    type: 'search',
  },
};

export const RadioInput = {
  args: {
    type: 'radio',
  },
};

export const CheckBoxInput = {
  args: {
    type: 'checkbox',
  },
};
