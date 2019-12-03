import { createAction } from "redux-actions"
import { cinemaListApi,cinemaChangeApi,cinemaDetailApi } from "api/cinema"
import { cinemaList, cinemaChange ,cinemaDetail} from "./cinemaType"

export const cinemaListAsyncAction = (id,brand,part) => {
    let cinemalAction = createAction(cinemaList, (data) => data)

    return async (dispath) => {
        let data = await cinemaListApi(id,brand,part)
        dispath(cinemalAction(data))
    }
}

export const cinemaChangeAction = (id) => {
    let cinemacAction = createAction(cinemaChange, (city) => city)
    return async (dispath) => {
        let data = await cinemaChangeApi(id)
        dispath(cinemacAction(data))
    }
}

export const cinemaDetailAction = (id) => {
    let cinemadAction = createAction(cinemaDetail, (city) => city)
    return async (dispath) => {
        let data = await cinemaDetailApi(id)
        dispath(cinemadAction(data))
    }
}