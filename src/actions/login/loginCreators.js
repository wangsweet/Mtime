import {loginUpdateType} from "./loginTypes";

export const loginUpdateAction = (info,value)=>({
    type:loginUpdateType,
    value,
    info
})

