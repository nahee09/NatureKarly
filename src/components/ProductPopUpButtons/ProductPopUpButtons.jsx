import { useContext } from 'react';
import {} from 'prop-types';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import { Button } from '..';

import classes from './ProductPopUpButtons.module.css';
import { titleText, contentText } from '@/@store/popUpTextState';
import { modalCloseContext } from '@/components/ModalWindow/ModalWindow';

export function ProductPopUpButtons() {
  const title = useRecoilValue(titleText);
  const text = useRecoilValue(contentText);
  const resetButton = useResetRecoilState(contentText);
  const contextFunction = useContext(modalCloseContext);
  const isAbled = title.length >= 1 && text.length >= 1;

  function handleCloseButton() {
    resetButton();
    contextFunction();
  }

  return (
    <section className={classes.buttonSection}>
      <Button isSecondary={true} onClick={handleCloseButton}>
        취소
      </Button>
      <Button disabled={!isAbled} type="submit">
        등록
      </Button>
    </section>
  );
}
