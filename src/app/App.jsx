import { InternalLinkMoveTest } from '@/components';
import { BaseLayout } from '@/components/Layout/Layout';
import ProductDetailTable from '@/components/ProductDetailTable/ProductDetailTable';
import MainPage from '@/pages/Main/MainPage';
import ProductList from '@/pages/ProductList/ProductList';
import { SignUp } from '@/pages/SignUp/SignUp';

function App() {
  return <ProductDetailTable price={5000}/>
}

export default App;
