import classes from './Counter.module.css';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';

const Counter = function () {
  return (
    <div className={classes.Counter}>
      <Button className={classes.MinusButton}>
        <A11yHidden>수량감소</A11yHidden>
      </Button>
      <Input className={classes.CountInput} min="0" type={'number'} value="1" />
      <Button className={classes.PlusButton}>
        <A11yHidden>수량증가</A11yHidden>
      </Button>
    </div>
  );
};

export default Counter;
