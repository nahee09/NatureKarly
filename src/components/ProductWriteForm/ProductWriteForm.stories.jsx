import { ProductWriteForm } from './ProductWriteForm';

export default {
  title: 'Components/ProductWriteForm',
  component: ProductWriteForm,
  tags: ['autodocs'],
  args: { ...ProductWriteForm.defaultProps },
};

/* -------------------------------------------------------------------------- */

export const Dafault = {
  args: {},
};

export const PutSecretCheckbox = {
  args: { putSecretCheckbox: true },
};
