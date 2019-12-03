import {searchAction} from "actions/movie/movieAction"

export const mapStateToProps = (state)=>({
    cityId:state.city.cityId,
    searchMovieList:state.movie.searchMovieList
})

export const mapDispatchToProps = (dispatch)=>({
    handleSearchAsyncData(id,e){
        dispatch(searchAction(id,e.target.value))
    }
})