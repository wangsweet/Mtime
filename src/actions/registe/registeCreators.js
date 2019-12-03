import {registeUpdateType} from "./registeTypes";

export const registeUpdateAction = (info,value)=>({
    type:registeUpdateType,
    value,
    info
})

