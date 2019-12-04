import { handleActions } from "redux-actions"
import { goodsdetailAsyncType,detailImgAsyncType} from "actions/goodsdetail/goodsdetailTypes"
const defaultState = {
    goodsdetail:[],
    detailImg:[],
    similar:[]
}

export default handleActions({
    [goodsdetailAsyncType]: (state, action) => {
        let goodsdetailState = JSON.parse(JSON.stringify(state));
        var obj={};
        obj=action.payload.data.data.content[Number(action.payload.index)]
        goodsdetailState.goodsdetail = [obj];
        goodsdetailState.similar = action.payload.data.data.content;
        return goodsdetailState;
    },
    [detailImgAsyncType]: (state, action) => {
        let detailImgState = JSON.parse(JSON.stringify(state));
        detailImgState.detailImg = action.payload.data;
        return detailImgState;
    }
}, defaultState)