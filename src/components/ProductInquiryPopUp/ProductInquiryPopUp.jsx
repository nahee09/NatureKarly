import {} from 'prop-types';

import {
  InquiryPlaceHolder,
  ProductPopUpButtons,
  ProductPopUpTitle,
  ProductWriteForm,
} from '..';

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
        content={<InquiryPlaceHolder />}
        id="inquiryWriteForm"
        inputName="inquiryTitleInput"
        putSecretCheckbox={true}
        textName="inquiryContentInput"
      />
      <ProductPopUpButtons />
    </div>
  );
}
