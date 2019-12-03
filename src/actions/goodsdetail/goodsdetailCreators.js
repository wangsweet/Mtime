import {goodsdetailAsyncType,detailImgAsyncType } from "./goodsdetailTypes";
import {goodsdetailApi,detailImgApi} from "api/goodsdetail";
import { createAction } from "redux-actions"

export const goodsdetailAsyncAction = (cid,index) => {
    let goodsdetailAction = createAction(goodsdetailAsyncType, (data) => ({data:data,index:index}))

    return async (dispatch) => {

        let data = await goodsdetailApi(cid);
        dispatch(goodsdetailAction(data,index))
    }
}
export const detailImgAsyncAction = (goodsid) => {
    let detailImgAction = createAction(detailImgAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await detailImgApi(goodsid);
        dispatch(detailImgAction(data))
    }
}
