import { handleActions } from "redux-actions"
import { movieAsyncType,newsAsyncType} from "actions/home/homeTypes"
const defaultState = {
   movie: [],
    news:[]
}

export default handleActions({
    [movieAsyncType]: (state, action) => {
        // console.log(action);
        let movieState = JSON.parse(JSON.stringify(state));
        movieState.movie = action.payload.movieList.slice(4);
        sessionStorage.setItem("movie",JSON.stringify(movieState.movie));
        return movieState;
    },
    [newsAsyncType]: (state, action) => {
        // console.log(action);
        let newsState = JSON.parse(JSON.stringify(state));
        newsState.news = action.payload[4].newsList;
        sessionStorage.setItem("news",JSON.stringify(newsState.news));
        return newsState;
    },
    
}, defaultState)