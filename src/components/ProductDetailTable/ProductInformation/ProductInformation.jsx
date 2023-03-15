import {
  ParagraphGray,
  ParagraphGrayLight,
  ParagraphGrayNormal,
} from '../Paragraph/Paragraph';

import classes from './ProductInformation.module.css';

const ProductInformation = function ({
  title,
  content,
  subcontent,
  allergycontent,
}) {
  return (
    <div className={classes.ProductInformation}>
      <ParagraphGray>{title}</ParagraphGray>
      <div>
        <ParagraphGray>{content}</ParagraphGray>
        <ParagraphGrayLight>{subcontent}</ParagraphGrayLight>
        <ParagraphGrayNormal>{allergycontent}</ParagraphGrayNormal>
      </div>
    </div>
  );
};

export default ProductInformation;
