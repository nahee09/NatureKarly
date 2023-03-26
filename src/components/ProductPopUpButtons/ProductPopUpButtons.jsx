import { useContext } from 'react';
import {} from 'prop-types';

import { Button } from '..';

import classes from './ProductPopUpButtons.module.css';
import { modalCloseContext } from '@/components/ModalWindow/ModalWindow';

export function ProductPopUpButtons() {
  return (
    <section className={classes.buttonSection}>
      <Button isSecondary={true} onClick={useContext(modalCloseContext)}>
        취소
      </Button>
      <Button disabled type="submit">
        등록
      </Button>
    </section>
  );
}
