import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalProductsQuantity = useSelector(
    (state) => state.cart.productsQuantity
  );
  const handleToggleShowCart = () => dispatch(cartActions.toggleShowCart());

  return (
    <button className={classes.button} onClick={handleToggleShowCart}>
      <span>My Cart</span>
      {totalProductsQuantity > 0 && (
        <span className={classes.badge}>{totalProductsQuantity}</span>
      )}
    </button>
  );
};

export default CartButton;
