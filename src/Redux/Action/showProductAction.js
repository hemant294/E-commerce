import axios from "axios";

export const fetchShowProduct = (productId) => async (dispatch) => {
    axios.get(`https://api.pujakaitem.com/api/products/${productId}`)
    .then(res => {
        dispatch({
            type: "FETCH_SHOW_PRODUCT",
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}
