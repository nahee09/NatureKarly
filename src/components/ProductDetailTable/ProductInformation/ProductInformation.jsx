import classes from './ProductInformation.module.css';

const ProductInformation = function ({
  title,
  content,
  subcontent,
  allergycontent,
}) {
  return (
    <dl className={classes.ProductInformation}>
      <dt className={classes.Title}>{title}</dt>
      <dd>
        <p className={classes.Content}>{content}</p>
        <p className={classes.SubContent}>{subcontent}</p>
        <p className={classes.AllergyContent}>{allergycontent}</p>
      </dd>
    </dl>
  );
};

export default ProductInformation;
