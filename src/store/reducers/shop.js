import { handleActions } from "redux-actions"
import { sliperAsyncType,categoryAsyncType,shoplistAsyncType} from "actions/shop/shopTypes"
const defaultState = {
    sliper:[],
    category:[],
    shoplist:[]
}

export default handleActions({
    [sliperAsyncType]: (state, action) => {
        // console.log(action);
        let sliperState = JSON.parse(JSON.stringify(state));
        sliperState.sliper = action.payload.data.config;
        sessionStorage.setItem("sliper",JSON.stringify(sliperState.sliper));
        return sliperState;
    },
    [categoryAsyncType]: (state, action) => {
        // console.log(action);
        let categoryState = JSON.parse(JSON.stringify(state));
        categoryState.category = action.payload.data.data[4].floors[1].list;
        sessionStorage.setItem("category",JSON.stringify(categoryState.category));
        return categoryState;
    },
    [shoplistAsyncType]: (state, action) => {
        // console.log(action);
        let shoplistState = JSON.parse(JSON.stringify(state));
        shoplistState.shoplist = action.payload.data.content;
        sessionStorage.setItem("shoplist",JSON.stringify(shoplistState.shoplist));
        return shoplistState;
    },
}, defaultState)