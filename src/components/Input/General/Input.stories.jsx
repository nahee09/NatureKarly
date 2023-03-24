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
TextInput.storyName = '텍스트 input';

export const SearchInput = {
  args: {
    type: 'search',
  },
};
SearchInput.storyName = '검색 input';

export const RadioInput = {
  args: {
    type: 'radio',
  },
};
RadioInput.storyName = '라디오버튼';

export const CheckBoxInput = {
  args: {
    type: 'checkbox',
  },
};
CheckBoxInput.storyName = '체크박스';
