import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import city from "./reducers/city"
const reducers = combineReducers({
    city
})

const store = createStore(reducers,composeWithDevTools())

export default store;