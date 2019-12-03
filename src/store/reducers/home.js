import { handleActions } from "redux-actions"
import { movieAsyncType} from "actions/home/homeTypes"
const defaultState = {
   movie: [],
  
}

export default handleActions({
    [movieAsyncType]: (state, action) => {
        // console.log(action);
        let movieState = JSON.parse(JSON.stringify(state));
        movieState.movie = action.payload.movieList.slice(4);
        return movieState;
    },
    
}, defaultState)