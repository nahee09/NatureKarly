import { Product } from './Product';

export default {
  title: 'Product',
  component: Product,
  tags: ['autodocs'],
  args: { ...Product.defaultProps },
};

export const DefaultProduct = {
  args: {
    isSwiper: false,
    isSale: false,
  },
};

export const SlaeProduct = {
  args: {
    isSwiper: false,
    isSale: true,
  },
};

export const SlideProduct = {
  args: {
    isSwiper: true,
    isSale: false,
  },
};

export const SlideSlaeProduct = {
  args: {
    isSwiper: true,
    isSale: true,
  },
};
