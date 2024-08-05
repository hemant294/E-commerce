const products = []

const  showProductReducer = (state = products, action) => {
  switch (action.type) {
    case "FETCH_SHOW_PRODUCT":
      return state, action.payload ;
    default:
      return state;
  }
};

export default showProductReducer;
