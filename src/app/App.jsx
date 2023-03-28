import { InternalLinkMoveTest } from '@/components';
import { BaseLayout } from '@/components/Layout/Layout';
import { MainPopUp } from '@/components/MainPopUp/MainPopUp';
import ProductDetailTable from '@/components/ProductDetailTable/ProductDetailTable';
import MainPage from '@/pages/Main/MainPage';
import ProductList from '@/pages/ProductList/ProductList';
import { SignUp } from '@/pages/SignUp/SignUp';

function App() {
  return <BaseLayout><MainPopUp /></BaseLayout>
  // return <ProductDetailTable price={5000}/>
}

export default App;
