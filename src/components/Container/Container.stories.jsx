import { Container } from './Container';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '원하는 태그로 하위 요소를 감쌀 수 있습니다.',
      },
    },
  },
  args: { ...Container.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const ContainerGuide = {
  args: {
    children: [
      <Button key="first">버튼1</Button>,
      <Button key="second">버튼2</Button>,
    ],
  },
};
