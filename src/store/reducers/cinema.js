import { handleActions } from "redux-actions"
import { cinemaList,cinemaChange,cinemaDetail } from "actions/cinema/cinemaType"
const defaultState = {
    cinemaList:[],
    cinemaChange:[],
    cinemaDetail:[]
}

export default handleActions({
    [cinemaList]: (state, action) => {
        let cinemaListState = JSON.parse(JSON.stringify(state))
        cinemaListState.cinemaList = action.payload
        return cinemaListState;
    },
    [cinemaChange]: (state, action) => {
        let cinemaChangeState = JSON.parse(JSON.stringify(state))
        cinemaChangeState.cinemaChange = action.payload
        return cinemaChangeState;
    },
    [cinemaDetail]:(state,action)=>{
        let cinemaDetailState = JSON.parse(JSON.stringify(state))
        cinemaDetailState.cinemaDetail = action.payload
        return cinemaDetailState;
    }
}, defaultState)

