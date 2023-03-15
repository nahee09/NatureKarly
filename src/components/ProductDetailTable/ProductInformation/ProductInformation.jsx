import { ParagraphGray, ParagraphGrayLight } from '../Paragraph/Paragraph';

import classes from './ProductInformation.module.css';

const ProductInformation = function ({ title, content, subcontent }) {
  return (
    <div className={classes.ProductInformation}>
      <ParagraphGray>{title}</ParagraphGray>
      <div>
        <ParagraphGray>{content}</ParagraphGray>
        <ParagraphGrayLight>{subcontent}</ParagraphGrayLight>
      </div>
    </div>
  );
};

export default ProductInformation;
