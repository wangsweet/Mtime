import {movieAsyncAction} from "actions/home/homeCreators"

export const mapStateToProps = (state)=>({
    movie:state.home.movie,
    // cityId:state.user.cityId
})

export const mapDispatchToProps = (dispatch)=>({
    handlemovieAsyncData(){
        dispatch(movieAsyncAction())
    }
})