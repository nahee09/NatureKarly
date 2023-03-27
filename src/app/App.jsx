import classes from './App.module.css';
import { SignUp } from '@/pages/SignUp/SignUp';

function App() {
  return (
    <div className={classes.app}>
      <SignUp />
    </div>
  );
}

export default App;
