import{showFlagAction,comeFlagAction} from "actions/movie/movieAction"

export const mapStateToProps = (state)=>({
    cityName:state.city.cityName,
    flag:state.movie.flag
})

export const mapDispatchToProps = (dispatch)=>({
    handleShow(num){
        dispatch(showFlagAction(num))
    },
    handleCome(num){
        dispatch(comeFlagAction(num))
    }
})
