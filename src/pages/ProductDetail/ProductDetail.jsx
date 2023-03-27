import { BaseLayout, InternalLinkMoveTest } from '@/components';
import ProductDetailTable from '@/components/ProductDetailTable/ProductDetailTable';

export default function ProductDetail() {
  return (
    <BaseLayout>
      <ProductDetailTable price={19000} />
      <InternalLinkMoveTest />
    </BaseLayout>
  );
}
