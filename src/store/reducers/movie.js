import { handleActions } from "redux-actions"
import { movieShow, movieCome,movieDetail,showFlag,comeFlag,searchMovie } from "actions/movie/movieType"
const defaultState = {
    movieComeList: [],
    movieShowList: [],
    movieDetail: [],
    flag:1,
    searchMovieList:{}
}

export default handleActions({
    [movieCome]: (state, action) => {
        let movieComeState = JSON.parse(JSON.stringify(state))
        movieComeState.movieComeList = action.payload
        return movieComeState;
    },
    [movieShow]: (state, action) => {
        let movieShowState = JSON.parse(JSON.stringify(state))
        movieShowState.movieShowList = action.payload
        return movieShowState;
    },
    [movieDetail]: (state, action) => {
        let movieDetailState = JSON.parse(JSON.stringify(state))
        movieDetailState.movieDetail = action.payload.data.detailMovie
        return movieDetailState;
    },
    [showFlag]:(state,action)=>{
        let showFlagState=JSON.parse(JSON.stringify(state))
        showFlagState.flag=action.payload
        return showFlagState
    },
    [comeFlag]:(state,action)=>{
        let comeFlagState=JSON.parse(JSON.stringify(state))
        comeFlagState.flag=action.payload
        return comeFlagState
    },
    [searchMovie]:(state,action)=>{
        let searchState=JSON.parse(JSON.stringify(state))
        searchState.searchMovieList=action.payload.data;
        return searchState
    }
}, defaultState)

