import { Button } from '@/components/Button/Button';
import { BaseLayout } from '@/components/Layout/Layout';

function App() {
  return (
    <div>
      <BaseLayout />
      <Button type="submit">회원가입</Button>
      <Button type="reset">삭제</Button>
    </div>
  );
}

export default App;
