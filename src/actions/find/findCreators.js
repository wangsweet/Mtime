import {newsAsyncType } from "./findTypes";
import {newsApi } from "api/find";
import { createAction } from "redux-actions"

export const newsAsyncAction = () => {
    let newsAction = createAction(newsAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await newsApi();
        dispatch(newsAction(data))
    }
}



