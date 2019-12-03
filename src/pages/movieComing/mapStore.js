import {MovieComeAsyncAction} from "actions/movie/movieAction"

export const mapStateToProps = (state)=>({
    cityId:state.city.cityId,
    cityName:state.city.cityName,
    movieComeList:state.movie.movieComeList
})

export const mapDispatchToProps = (dispatch)=>({
    handleComeAsyncData(id){
        dispatch(MovieComeAsyncAction(id))
    }
})

