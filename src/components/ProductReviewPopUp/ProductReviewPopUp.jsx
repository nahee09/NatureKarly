import {} from 'prop-types';

import { ProductPopUpButtons, ProductPopUpTitle, ProductWriteForm } from '..';

import classes from './ProductReviewPopUp.module.css';
import thumbnailImg from '@/assets/salad/thumbnail.jpg';

export function ProductReviewPopUp() {
  return (
    <div className={classes.modal}>
      <ProductPopUpTitle
        alt="상품 썸네일 이미지"
        image={thumbnailImg}
        imageTitle={'[풀무원] 탱탱쫄면 (4개입)'}
        title="후기 작성"
      />
      <ProductWriteForm
        content="후기를 작성해주세요."
        id="reviewWriteForm"
        inputName="reviewTitleInput"
        putSecretCheckbox={false}
        textName="reviewContentInput"
      />
      <ProductPopUpButtons />
    </div>
  );
}
