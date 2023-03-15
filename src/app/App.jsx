import { Button } from '@/components/Button/Button';
import { Navigation } from '@/components/Nav/Nav';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Button type="submit">회원가입</Button>
      <Button type="reset">삭제</Button>
    </div>
  );
}

export default App;
