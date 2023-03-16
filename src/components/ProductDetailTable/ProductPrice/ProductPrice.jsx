import classes from './ProductPrice.module.css';

const ProductPrice = function ({ title, name, price }) {
  return (
    <div className={classes.ProductPrice}>
      <p className={classes.Title}>{title}</p>
      <div className={classes.ProductCount}>
        <p className={classes.ProductName}>{name}</p>
        <div className={classes.productPriceCount}>
          <input type="number" />
          <p className={classes.Price}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
