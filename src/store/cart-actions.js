import { uiActions } from "./ui";
import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    async function fetchCart() {
      const response = await fetch(
        "https://test-55950-default-rtdb.europe-west1.firebasedatabase.app/redux-adv/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed to get Cart details from the Server!");
      }

      return await response.json();
    }

    try {
      const cartData = await fetchCart();
      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [],
          productsQuantity: cartData?.productsQuantity,
        })
      );

      dispatch(uiActions.resetNotification());
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to fetch Cart details from the Server!!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Request has been sent!",
      })
    );

    async function sendRequest() {
      const response = await fetch(
        "https://test-55950-default-rtdb.europe-west1.firebasedatabase.app/redux-adv/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items || [],
            productsQuantity: cart.productsQuantity || 0,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    }

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Done",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send cart data!",
        })
      );
    }
  };
};
