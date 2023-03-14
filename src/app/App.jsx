import { Button } from '@/components/Button/Button';
import { Nav } from '@/components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Button type="submit">회원가입</Button>
      <Button type="reset">삭제</Button>
    </div>
  );
}

export default App;
