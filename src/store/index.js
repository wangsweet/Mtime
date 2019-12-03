import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import city from "./reducers/city"
import movie from "./reducers/movie"
import cinema from "./reducers/cinema"
const reducers = combineReducers({
    city,
    movie,
    cinema
})

const store = createStore(reducers,applyMiddleware(reduxThunk))

export default store;