import {movieAsyncAction,newsAsyncAction} from "actions/home/homeCreators"

export const mapStateToProps = (state)=>({
    movie:state.home.movie,
    cityName:state.city.cityName,
    news:state.home.news
})

export const mapDispatchToProps = (dispatch)=>({
    handlemovieAsyncData(){
        dispatch(movieAsyncAction())
    },
    handlenewsAsyncData(){
        dispatch(newsAsyncAction())
    },
})