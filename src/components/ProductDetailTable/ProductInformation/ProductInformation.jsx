import classes from './ProductInformation.module.css';

const ProductInformation = function ({
  title,
  content,
  subcontent,
  allergycontent,
  ...restProps
}) {
  return (
    <dl className={classes.ProductInformation} {...restProps}>
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
