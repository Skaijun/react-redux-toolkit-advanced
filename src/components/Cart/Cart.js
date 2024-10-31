import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  let cartSection = null;
  if (!cartItems.length) {
    cartSection = (
      <>
        <h2>Your basket is empty!</h2>
        <p>Please add products...</p>
      </>
    );
  } else {
    cartSection = (
      <>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </>
    );
  }

  return <Card className={classes.cart}>{cartSection}</Card>;
};

export default Cart;
