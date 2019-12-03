const store = createStore(reducers,applyMiddleware(reduxThunk))
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import city from "./reducers/city"
import login from "./reducers/login"
import registe from "./reducers/registe"
import home from "./reducers/home"
import shop from "./reducers/shop"
import goodslist from "./reducers/goodslist"
import goodsdetail from "./reducers/goodsdetail"
import cart from "./reducers/cart"
import movie from "./reducers/movie"
import cinema from "./reducers/cinema"
const reducers = combineReducers({
    city,
    login,
    registe,
    home,
    shop,
    goodslist,
    goodsdetail,
    cart,
    movie,
    cinema
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;