import axios from "axios";

export const fetchProduct = () => async (dispatch) => {
    axios.get('https://api.pujakaitem.com/api/products')
    .then(res => {
        dispatch({
            type: "FETCH_PRODUCT_SUCCESS",
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}
