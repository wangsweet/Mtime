import {MovieDetailAsyncAction} from "actions/movie/movieAction"

export const mapStateToProps = (state)=>({
    movieDetail:state.movie.movieDetail
})

export const mapDispatchToProps = (dispatch)=>({
    handleDetailAsyncData(id){
        dispatch(MovieDetailAsyncAction(id))
    }
})

