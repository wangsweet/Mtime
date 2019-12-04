import { movieAsyncType,newsAsyncType } from "./homeTypes";
import { homeApi,newsApi } from "api/home";
import { createAction } from "redux-actions"

export const movieAsyncAction = () => {
    let movieAction = createAction(movieAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await homeApi();
        dispatch(movieAction(data))
    }
}
export const newsAsyncAction = () => {
    let newsAction = createAction(newsAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await newsApi();
        dispatch(newsAction(data))
    }
}



