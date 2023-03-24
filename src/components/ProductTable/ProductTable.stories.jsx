import { ProductTable } from './ProductTable';
import { ProductReviewTable } from '..';

export default {
  title: 'Components/ProductTable',
  component: ProductTable,
  tags: ['autodocs'],
  args: { ...ProductTable.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Default = {
  args: { tableContent: <ProductReviewTable /> },
};
