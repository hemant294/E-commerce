const initialState = {
  products: [],
  filteredProducts: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case "FILTER_BRAND_TYPE":
      if (action.payload.name.toLowerCase() === "all") {
        return { ...state, filteredProducts: state.products };
      }
      const name = action.payload.name;
      const filterProduct = state.products.filter(
        (item) => item.category.toLowerCase() === name.toLowerCase()
      );
      return {
        ...state,
        filteredProducts: filterProduct,
      };

    case "FILTER_BY_BRAND":
      if (action.payload.name.toLowerCase() === "all") {
        return { ...state, filteredProducts: state.products };
      }
      const brandname = action.payload.name;
      const filterBrand = state.products.filter(
        (item) => item.company.toLowerCase() === brandname.toLowerCase()
      );
      return {
        ...state,
        filteredProducts: filterBrand,
      };

    case "FILTER_BY_MIN_PRICE":
      const sortedProducts = [...state.products].sort(
        (a, b) => a.price - b.price
      );
      return {
        ...state,
        filteredProducts: sortedProducts,
      };

    case "FILTER_BY_MAX_PRICE":
      const sortedMaxProducts = [...state.products].sort(
        (a, b) => b.price - a.price
      );
      return {
        ...state,
        filteredProducts: sortedMaxProducts,
      };

    case "SEARCH_DATA":
      const searchData = action.payload;
      const filterSearchItem = state.products.filter(
        (item) => item.company.toLowerCase() === searchData.toLowerCase() ||
        item.category.toLowerCase() === searchData.toLowerCase() ||
        item.name.toLowerCase() === searchData.toLowerCase()
      );
      return {
        ...state,
        filteredProducts: filterSearchItem,
      };

    default:
      return state;
  }
};

export default ProductReducer;
