import classes from './ProductPrice.module.css';
import Counter from '@/components/Counter/Counter';

const ProductPrice = function ({ title, name, price }) {
  return (
    <div className={classes.ProductPrice}>
      <p className={classes.Title}>{title}</p>
      <div className={classes.ProductCount}>
        <p className={classes.ProductName}>{name}</p>
        <div className={classes.productPriceCount}>
          <Counter />
          <p className={classes.Price}>{price}원</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
