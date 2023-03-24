import { A11yHidden, IconComponent } from '..';

import classes from './PageMoveButtons.module.css';

export function PageMoveButtons() {
  return (
    <div className={classes.pageMoveButtons}>
      <button className={classes.previousButton} type="button">
        <A11yHidden>이전</A11yHidden>
        <IconComponent
          data-image="Direction=Down"
          dataProps={{
            width: '3.5rem',
            height: '3.5rem',
          }}
        />
      </button>
      <button className={classes.nextButton} type="button">
        <A11yHidden>다음</A11yHidden>
        <IconComponent
          data-image="Direction=Down"
          dataProps={{ width: '3.5rem', height: '3.5rem' }}
        />
      </button>
    </div>
  );
}
