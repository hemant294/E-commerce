export const filterbrandType = (item) => {
  return {
    type: "FILTER_BRAND_TYPE",
    payload: item,
  };
};

export const filterByBrand = (item) => {
  return {
    type: "FILTER_BY_BRAND",
    payload: item,
  };
};

export const filterByMinPrice = () => ({
  type: "FILTER_BY_MIN_PRICE",
});

export const filterByMaxPrice = () => ({
  type: "FILTER_BY_MAX_PRICE",
});

export const searchData = (item) => {
    return {
      type: "SEARCH_DATA",
      payload: item,
    };
  };