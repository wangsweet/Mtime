import {cinemaListAsyncAction,cinemaChangeAction} from "actions/cinema/cinemaAction"

export const mapStateToProps = (state)=>({
    cityId:state.city.cityId,
    cityName:state.city.cityName,
    cinemaList:state.cinema.cinemaList,
    cinemaChange:state.cinema.cinemaChange
})

export const mapDispatchToProps = (dispatch)=>({
    handleCinemaAsyncData(id,brand,part){
        dispatch(cinemaListAsyncAction(id,brand,part))
    },
    handleCinemaChangeAsyncData(id){
        dispatch(cinemaChangeAction(id))
    }
})