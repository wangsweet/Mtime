import { createAction } from "redux-actions"
import { cityAll } from "api/city"
import { cityList, cityChange } from "./cityListType"

export const cityAsyncAction = () => {
    let cityAction = createAction(cityList, (data) => data)

    return async (dispath) => {
        let data = await cityAll()
        dispath(cityAction(data))
    }
}

export const cityChangeAction = (city) => {
    let cityCa = createAction(cityChange, (city) => city)
    return (dispath) => {
        dispath(cityCa(city))
    }
}