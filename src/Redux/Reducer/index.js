import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import cartReducer from "./cartReducer";
import showProductReducer from "./showProductReducter";
import currentUserReducer from "./currentUserReducer";
import currentUserRoleReducer from "./currentUserRoleReducer";

const rootReducer = combineReducers({
    products: ProductReducer,
    cart: cartReducer,
    showProduct: showProductReducer,
    currentUser: currentUserReducer,
    currentUserRole: currentUserRoleReducer,
});

export default rootReducer;