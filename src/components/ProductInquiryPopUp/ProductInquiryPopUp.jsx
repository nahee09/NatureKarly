import {} from 'prop-types';

import { ProductPopUpButtons, ProductPopUpTitle, ProductWriteForm } from '..';

import classes from './ProductInquiryPopUp.module.css';
import thumbnailImg from '@/assets/salad/thumbnail.jpg';

export function ProductInquiryPopUp() {
  return (
    <div className={classes.modal}>
      <ProductPopUpTitle
        alt="상품 썸네일 이미지"
        image={thumbnailImg}
        imageTitle={'[풀무원] 탱탱쫄면 (4개입)'}
        title="상품 문의하기"
      />
      <ProductWriteForm
        content="문의 내용을 작성해주세요."
        id="inquiryWriteForm"
        inputName="inquiryTitleInput"
        putSecretCheckbox={true}
        textName="inquiryContentInput"
      />
      <ProductPopUpButtons />
    </div>
  );
}
