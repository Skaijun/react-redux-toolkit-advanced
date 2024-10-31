import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleAddToCart = (pid) => {
    const existingItem = items.find((item) => item.id === pid);
    if (existingItem) {
      dispatch(cartActions.increaseItemQt({ id: pid }));
    } else {
      const newItem = {
        id,
        title,
        price,
        description,
        quantity: 1,
        totals: price,
      };
      dispatch(cartActions.addItem({ item: newItem }));
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
