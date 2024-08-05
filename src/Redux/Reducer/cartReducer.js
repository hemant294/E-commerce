// reducers/cartReducer.js
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  selectColor: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }], // Initialize qty to 1
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "SELECT_COLOR":
      return {
        ...state,
        selectColor: action.payload,
      };

    case "INCREASE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: Math.max(1, item.qty - 1) } : item // Prevent qty from going below 1
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
