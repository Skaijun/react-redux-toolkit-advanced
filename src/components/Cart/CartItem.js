import { useSelector, useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { id, title, quantity, totals, price } = props.item;

  const handleIncreaseItemQt = () => {
    dispatch(cartActions.increaseItemQt({ id }));
  };
  const handleDecreaseItemQt = () => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem.quantity === 1) {
      dispatch(cartActions.removeItem({ id }));
    } else {
      dispatch(cartActions.decreaseItemQt({ id }));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totals.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseItemQt}>-</button>
          <button onClick={handleIncreaseItemQt}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
