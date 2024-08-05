import { connect } from "react-redux"

const initialState = {
    qty: 1
}

const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_CART_QTY":
        return state
    
    case "DECREASE_CART_QTY":
        return state
  
    default:
        return state
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

const mapStateToProps = (state) => ({
    // filteredProducts: state.products.filteredProducts,
    cart: state.cart.cart,
    // currentUser: state.currentUser,
  });

export default connect(mapStateToProps)(quantityReducer)