import { handleActions } from "redux-actions"
import { goodslistAsyncType} from "actions/goodslist/goodslistTypes"
const defaultState = {
    goodslist:[]
}

export default handleActions({
    [goodslistAsyncType]: (state, action) => {
        // console.log(action);
        let goodslistState = JSON.parse(JSON.stringify(state));
        goodslistState.goodslist = action.payload.data.content;
        // console.log(goodslistState.goodslist);
        return goodslistState;
    },
}, defaultState)