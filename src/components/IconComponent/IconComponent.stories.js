import { IconComponent } from './IconComponent';

export default {
  title: 'Example/IconComponent',
  component: IconComponent,
  tags: ['autodocs'],
};

export const CancelIcon = {
  args: {
    'data-image': 'cancel',
    dataProps: {
      width: '30px',
      height: '30px',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
    },
  },
};

export const CartIcon = {
  args: {
    'data-image': 'cart',
    dataProps: {
      width: '45px',
      height: '45px',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
    },
  },
};

export const SquareDisabledIcon = {
  args: {
    'data-image': 'squreDisabled=false',
    dataProps: {
      width: '400px',
      height: '100px',
      backgroundPositionX: 'right',
      backgroundPositionY: 'bottom',
    },
  },
};
