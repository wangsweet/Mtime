import {goodslistAsyncType } from "./goodslistTypes";
import {goodslistApi } from "api/goodslist";
import { createAction } from "redux-actions"

export const goodslistAsyncAction = (cid) => {
    let goodslistAction = createAction(goodslistAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await goodslistApi(cid);
        dispatch(goodslistAction(data))
    }
}


