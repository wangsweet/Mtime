import { sliperAsyncType,categoryAsyncType,shoplistAsyncType } from "./shopTypes";
import { sliperApi,categoryApi,shoplistApi } from "api/shop";
import { createAction } from "redux-actions"

export const sliperAsyncAction = () => {
    let sliperAction = createAction(sliperAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await sliperApi();
        dispatch(sliperAction(data))
    }
}
export const categoryAsyncAction = () => {
    let categoryAction = createAction(categoryAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await categoryApi();
        dispatch(categoryAction(data))
    }
}
export const shoplistAsyncAction = () => {
    let shoplistAction = createAction(shoplistAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await shoplistApi();
        dispatch(shoplistAction(data))
    }
}


