import { handleActions } from "redux-actions"
import {newsAsyncType} from "actions/find/findTypes"
const defaultState = {
    news:[]
}

export default handleActions({
    [newsAsyncType]: (state, action) => {
        let newsState = JSON.parse(JSON.stringify(state));
        newsState.news = action.payload[4].newsList;
        sessionStorage.setItem("news",JSON.stringify(newsState.news));
        return newsState;
    },
    
}, defaultState)