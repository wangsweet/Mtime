import { movieAsyncType } from "./homeTypes";
import { homeApi } from "api/home";
import { createAction } from "redux-actions"

export const movieAsyncAction = () => {
    let movieAction = createAction(movieAsyncType, (data) => data)

    return async (dispatch) => {

        let data = await homeApi();
        dispatch(movieAction(data))
    }
}



