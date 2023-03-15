import { Button } from '@/components/Button/Button';
import { IconComponent } from '@/components/IconComponent/IconComponent';

function App() {
  return (
    <div>
      <h1>React 앱</h1>
      <IconComponent data-image={'react'}>
        <Button isSecondary />
      </IconComponent>
      <Button isSecondary>Secondary</Button>
    </div>
  );
}

export default App;
