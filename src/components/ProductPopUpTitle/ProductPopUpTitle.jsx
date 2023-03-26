import { useContext } from 'react';

import { string } from 'prop-types';

import { A11yHidden, IconComponent } from '..';

import classes from './ProductPopUpTitle.module.css';
import { modalCloseContext } from '@/components/ModalWindow/ModalWindow';

export function ProductPopUpTitle({ title, image, alt, imageTitle }) {
  return (
    <>
      <section className={classes.popUpTitle}>
        <h3>{title}</h3>
        <button
          className={classes.closeButton}
          type="button"
          onClick={useContext(modalCloseContext)}
        >
          <A11yHidden>
            <span>닫기</span>
          </A11yHidden>
          <IconComponent data-image="close" />
        </button>
      </section>
      <section className={classes.popUpProduct}>
        <img alt={alt} className={classes.thumnail} src={image} />
        <h4>{imageTitle}</h4>
      </section>
    </>
  );
}

ProductPopUpTitle.defaultProps = {
  title: '타이틀',
  image: '',
  alt: '대체텍스트',
  imageTitle: '이미지 제목',
};

ProductPopUpTitle.propTypes = {
  title: string,
  image: string,
  alt: string,
  imageTitle: string,
};
