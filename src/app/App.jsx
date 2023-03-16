import { Button } from '@/components/Button/Button';
import { Menu } from '@/components/Menu/Menu';
function App() {
  return (
    <div>
      <Menu />
      <Button type="submit">회원가입</Button>
      <Button type="reset">삭제</Button>
    </div>
  );
}

export default App;
