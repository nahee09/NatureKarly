import classes from './ProductInformation.module.css';

const ProductInformation = function ({
  title,
  content,
  subcontent,
  allergycontent,
}) {
  return (
    <div className={classes.ProductInformation}>
      <p className={classes.Title}>{title}</p>
      <div>
        <p className={classes.Content}>{content}</p>
        <p className={classes.SubContent}>{subcontent}</p>
        <p className={classes.AllergyContent}>{allergycontent}</p>
      </div>
    </div>
  );
};

export default ProductInformation;
