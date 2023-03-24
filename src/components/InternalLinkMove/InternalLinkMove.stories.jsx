import { InternalLinkMove } from './InternalLinkMove';

export default {
  title: 'Components/InternalLinkMove',
  component: InternalLinkMove,
  tags: ['autodocs'],
  args: { ...InternalLinkMove.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Default = {
  args: {},
};

export const IsNumberOption = {
  args: { isNumberOption: true },
};
