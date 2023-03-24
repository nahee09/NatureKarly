import {} from 'prop-types';
import { Button } from '..';

import classes from './ProductPopUpButtons.module.css';

export function ProductPopUpButtons() {
  return (
    <section className={classes.buttonSection}>
      <Button isSecondary={true}>취소</Button>
      <Button disabled type="submit">
        등록
      </Button>
    </section>
  );
}
