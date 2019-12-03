import {cinemaDetailAction} from "actions/cinema/cinemaAction"

export const mapStateToProps = (state)=>({
    cinemaDetail:state.cinema.cinemaDetail
})

export const mapDispatchToProps = (dispatch)=>({
    handlecinemaDetail(id){
        dispatch(cinemaDetailAction(id))
    }
})
