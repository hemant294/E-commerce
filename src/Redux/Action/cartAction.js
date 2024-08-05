export const addToCart = (product) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));

  dispatch({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });
};

export const selectColor = (id) => ({
  type: "SELECT_COLOR",
  payload: id,
});

// Redux/Action/cartAction.js
export const increaseCartQty = (id) => ({
  type: "INCREASE_CART_QTY",
  payload: id,
});

export const decreaseCartQty = (id) => ({
  type: "DECREASE_CART_QTY",
  payload: id,
});
  