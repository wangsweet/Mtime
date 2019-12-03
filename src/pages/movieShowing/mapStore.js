import {MovieShowAsyncAction} from "actions/movie/movieAction"

export const mapStateToProps = (state)=>({
    cityId:state.city.cityId,
    cityName:state.city.cityName,
    movieShowList:state.movie.movieShowList
})

export const mapDispatchToProps = (dispatch)=>({
    handleShowAsyncData(id){
        dispatch(MovieShowAsyncAction(id))
    }
})

