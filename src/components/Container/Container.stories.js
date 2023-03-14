import { Container } from './Container';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Container 컴포넌트는 하위 요소를 감쌀 수 있고 왼쪽, 중앙, 오른쪽 정렬을 할 수 있습니다.',
      },
    },
  },
  args: { ...Container.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const ContainerGuide = {
  args: {
    align: 'center',
    children: <Button>버튼</Button>,
  },
};
